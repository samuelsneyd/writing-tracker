import * as React from 'react';
import { serializeModel } from '@aws-amplify/datastore/ssr';
import { DataStore } from 'aws-amplify';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Award, Project, Session } from '../../models';
import { SerializedAward, SerializedProject, SerializedSession } from '../../models/serialized';
import { awardsSet } from '../../store/awards/awardsSlice';
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
import DailyGoalTabs from '../../components/DailyGoal/DailyGoalTabs';
import DailyQuote from '../../components/DailyQuote/DailyQuote';
import LoginStreak from '../../components/LoginStreak/LoginStreak';
import { MenuIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>

const HomeScreen = ({ navigation }: Props): React.ReactElement => {
  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();
  const reduxAwards = useAppSelector(state => state.awards);
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

  // Prefetch awards
  React.useEffect(() => {
    if (reduxAwards.length > 0) {
      return;
    }

    // Load from DataStore and update Redux
    const getAwards = async () => {
      const foundAwards = await DataStore.query(Award);
      dispatch(awardsSet(serializeModel(foundAwards) as unknown as SerializedAward[]));
    };

    getAwards().then();
  }, []);

  const renderDrawerAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={MenuIcon}
      // @ts-ignore
      onPress={() => navigation.toggleDrawer()}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Home" alignment="center" accessoryLeft={renderDrawerAction} />
      <Divider />
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Layout style={styles.body}>
          <Text category="h1">Home</Text>
          <DailyQuote isFocused={isFocused} />
          <Text category="h5">Daily Goals</Text>
          <DailyGoalTabs />
          <Text category="h5">Login Streak</Text>
          <LoginStreak isFocused={isFocused} />
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
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
});

export default HomeScreen;
