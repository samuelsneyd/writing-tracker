import * as React from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import { DataStore } from 'aws-amplify';
import { Project, Session } from '../../models';
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import useBackNavigation from '../../hooks/useBackNavigation/useBackNavigation';
import { capitalCase, noCase } from 'change-case';
import { titleCase } from 'title-case';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Details'>

const ProjectDetailsScreen = ({ route, navigation }: Props): React.ReactElement => {
  const [project, setProject] = React.useState<Project>();
  const [sessions, setSessions] = React.useState<Session[]>([]);
  const { BackAction } = useBackNavigation(navigation);
  const { id, name } = route.params;

  React.useEffect(() => {
    const getProject = async () => {
      try {
        const foundProject = await DataStore.query(Project, id);
        setProject(foundProject);
      } catch (e) {
        console.error('Error while reading project', e);
      }
    };

    getProject().then();
  }, []);

  React.useEffect(() => {
    const getSessions = async () => {
      try {
        const foundSessions = await DataStore.query(Session, c => c.project.id.eq(id));
        setSessions(foundSessions);
      } catch (e) {
        console.error('Error while getting sessions', e);
      }
    };

    getSessions().then();
  }, [project]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title={name} alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {project
          ? <>
            <Text category="h1">{capitalCase(project.projectType)}</Text>
            <Text>Title: {titleCase(project.name)}</Text>
            <Text>Description: {project.description}</Text>
            <Text>Status: {titleCase(noCase(project.status))}</Text>
            {sessions.map((session, i) =>
              <Text key={session.id}>Session {i + 1}: {session.words} words, {session.minutes} minutes</Text>)
            }
            <Text>Number of sessions: {sessions.length}</Text>
            <Text>Total words: {sessions.reduce((prev, { words: next }) => prev + next, 0)}</Text>
            <Text>Total minutes: {sessions.reduce((prev, { minutes: next }) => prev + next, 0)}</Text>
            <Text>Words per page: {project.wordsPerPage}</Text>
            <Text>Daily word targets:</Text>
            <Text>Mon: {project.wordTarget?.mon?.enabled ? project.wordTarget.mon.words : 0}</Text>
            <Text>Tue: {project.wordTarget?.tue?.enabled ? project.wordTarget.tue.words : 0}</Text>
            <Text>Wed: {project.wordTarget?.wed?.enabled ? project.wordTarget.wed.words : 0}</Text>
            <Text>Thu: {project.wordTarget?.thu?.enabled ? project.wordTarget.thu.words : 0}</Text>
            <Text>Fri: {project.wordTarget?.fri?.enabled ? project.wordTarget.fri.words : 0}</Text>
            <Text>Sat: {project.wordTarget?.sat?.enabled ? project.wordTarget.sat.words : 0}</Text>
            <Text>Sun: {project.wordTarget?.sun?.enabled ? project.wordTarget.sun.words : 0}</Text>
          </>
          : <Text>No project found!</Text>
        }
      </Layout>
    </SafeAreaView>
  );
};

export default ProjectDetailsScreen;
