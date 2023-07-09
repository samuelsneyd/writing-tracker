import * as React from 'react';
import { serializeModel } from '@aws-amplify/datastore/ssr';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DataStore } from 'aws-amplify';
import {
  ProgressPercentageByProject,
  TotalTimeByProject,
  TotalWordsByDay,
  TotalWordsByProject,
  SessionHeatmap,
  WordsIntervalChartGroup,
} from '../../components/Charts';
import { Project, Session } from '../../models';
import { SerializedProject, SerializedSession } from '../../models/serialized';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { projectsSet } from '../../store/projects/projectsSlice';
import { sessionsSet } from '../../store/sessions/sessionsSlice';
import type { ChartsStackParamList } from '../../types/types';
import {
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionElement,
} from '@ui-kitten/components';
import { MenuIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<ChartsStackParamList, 'Charts'>

const ChartsScreen = (_props: Props): React.ReactElement => {
  const dispatch = useAppDispatch();
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);

  // Prefetch projects
  React.useEffect(() => {
    if (reduxProjects.length > 0) {
      return;
    }

    // Load from DataStore and update Redux
    const getProjects = async () => {
      const foundProjects = await DataStore.query(Project);
      dispatch(projectsSet(serializeModel(foundProjects) as unknown as SerializedProject[]));
    };

    getProjects().then();
  }, []);

  // Prefetch sessions
  React.useEffect(() => {
    if (reduxSessions.length > 0) {
      return;
    }

    // Load from DataStore and update Redux
    const getSessions = async () => {
      const foundSessions = await DataStore.query(Session);
      dispatch(sessionsSet(serializeModel(foundSessions) as unknown as SerializedSession[]));
    };

    getSessions().then();
  }, []);

  const renderDrawerAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => undefined}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Charts" alignment="center" accessoryLeft={renderDrawerAction} />
      <Divider />
      <ScrollView style={styles.container}>
        <Layout style={styles.body}>
          {[
            WordsIntervalChartGroup,
            ProgressPercentageByProject,
            TotalWordsByProject,
            TotalTimeByProject,
            TotalWordsByDay,
            SessionHeatmap,
          ].map((Chart, i) =>
            // Order should never change so using index as key shouldn't cause unnecessary re-renders
            <React.Fragment key={i}><Chart /><Divider style={styles.divider} /></React.Fragment>,
          )}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 64,
    gap: 10,
  },
  divider: {
    paddingVertical: 24,
  },
});

export default ChartsScreen;
