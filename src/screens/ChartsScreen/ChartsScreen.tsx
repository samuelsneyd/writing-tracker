import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useIsFocused } from '@react-navigation/native';
import { DataStore, Predicates } from 'aws-amplify';
import TotalWordsByDayChart from '../../components/Charts/TotalWordsByDayChart';
import TotalWordsByProjectChart from '../../components/Charts/TotalWordsByProjectChart';
import { EagerProject, EagerSession, Project, Session } from '../../models';
import type { MoreStackParamList } from '../../types/types';
import {
  Divider,
  Layout,
  TopNavigation,
  Text,
  TopNavigationAction,
} from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<MoreStackParamList, 'Charts'>

const ChartsScreen = ({ navigation }: Props): React.ReactElement => {
  // TODO - load eager models from redux
  const [eagerProjects, setEagerProjects] = React.useState<EagerProject[]>([]);
  const [eagerSessions, setEagerSessions] = React.useState<EagerSession[]>([]);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    const hydrateProjects = async () => {
      const projects = await DataStore.query(Project, Predicates.ALL);
      // Hydrate projects with sessions
      const hydratedProjects: EagerProject[] = await Promise.all(projects.map(async project => ({
        ...project,
        sessions: await DataStore.query(Session, c => c.project.id.eq(project.id)),
      })));

      setEagerProjects(hydratedProjects);
    };

    hydrateProjects().then();
  }, [isFocused]);

  React.useEffect(() => {
    const hydrateSessions = async () => {
      const sessions = await DataStore.query(Session, Predicates.ALL);
      // Hydrate sessions with projects
      const hydratedSessions: EagerSession[] = await Promise.all(sessions.map(async session => ({
        ...session,
        project: await session.project,
      })));

      setEagerSessions(hydratedSessions);
    };

    hydrateSessions().then();
  }, [isFocused]);

  const backAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Charts" alignment="center" accessoryLeft={backAction} />
      <Divider />
      <ScrollView style={styles.container}>
        <Layout style={styles.body}>
          <Text category="h1">Charts</Text>
          <TotalWordsByProjectChart eagerProjects={eagerProjects} />
          <Divider style={styles.divider} />
          <TotalWordsByDayChart eagerSessions={eagerSessions} />
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
    paddingVertical: 10,
  },
});

export default ChartsScreen;
