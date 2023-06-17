import { serializeModel } from '@aws-amplify/datastore/ssr';
import { DataStore } from 'aws-amplify';
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Project, Session } from '../../models';
import { SerializedProject, SerializedSession } from '../../models/serialized';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { projectsSet } from '../../store/projects/projectsSlice';
import { sessionsSet } from '../../store/sessions/sessionsSlice';
import type { HomeStackParamList } from '../../types/types';
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionElement,
} from '@ui-kitten/components';
import DailyQuote from '../../components/DailyQuote/DailyQuote';
import LoginStreak from '../../components/LoginStreak/LoginStreak';
import { MenuIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>

const HomeScreen = ({ navigation }: Props): React.ReactElement => {
  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);

  // Prefetch projects
  React.useEffect(() => {
    if (reduxProjects.length > 0 || !isFocused) {
      return;
    }

    // Load from DataStore and update Redux
    const getProjects = async () => {
      const foundProjects = await DataStore.query(Project);
      dispatch(projectsSet(serializeModel(foundProjects) as unknown as SerializedProject[]));
    };

    getProjects().then();
  }, [isFocused]);

  // Prefetch sessions
  React.useEffect(() => {
    if (reduxSessions.length > 0 || !isFocused) {
      return;
    }

    // Load from DataStore and update Redux
    const getSessions = async () => {
      const foundSessions = await DataStore.query(Session);
      dispatch(sessionsSet(serializeModel(foundSessions) as unknown as SerializedSession[]));
    };

    getSessions().then();
  }, [isFocused]);

  const renderDrawerAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => undefined}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Home" alignment="center" accessoryLeft={renderDrawerAction} />
      <Divider />
      <Layout style={styles.body}>
        <Text category="h1">Home</Text>
        <DailyQuote isFocused={isFocused} />
        <LoginStreak isFocused={isFocused} />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
  },
});

export default HomeScreen;
