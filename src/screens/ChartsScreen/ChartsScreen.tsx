import { serializeModel } from '@aws-amplify/datastore/ssr';
import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useIsFocused } from '@react-navigation/native';
import { DataStore, Predicates } from 'aws-amplify';
import {
  ProgressPercentageByProject,
  TotalTimeByProject,
  TotalWordsByDay,
  TotalWordsByProject,
  WordsWritten6Month,
  WordsWrittenMonth,
  WordsWrittenWeek,
  WordsWrittenYear,
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

const ChartsScreen = ({ navigation }: Props): React.ReactElement => {
  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);

  React.useEffect(() => {
    if (!isFocused) {
      return;
    }

    const hydrateProjects = async () => {
      const projects = await DataStore.query(Project, Predicates.ALL);

      // TODO - refactor
      if (reduxProjects.length === 0) {
        dispatch(projectsSet(serializeModel(projects) as unknown as SerializedProject[]));
      }
    };

    hydrateProjects().then();
  }, [isFocused]);

  React.useEffect(() => {
    if (!isFocused) {
      return;
    }

    const hydrateSessions = async () => {
      const sessions = await DataStore.query(Session, Predicates.ALL);

      // TODO - refactor
      if (reduxSessions.length === 0) {
        dispatch(sessionsSet(serializeModel(sessions) as unknown as SerializedSession[]));
      }
    };

    hydrateSessions().then();
  }, [isFocused]);

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
            WordsWrittenWeek,
            WordsWrittenMonth,
            WordsWritten6Month,
            WordsWrittenYear,
            ProgressPercentageByProject,
            TotalWordsByProject,
            TotalTimeByProject,
            TotalWordsByDay,
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
