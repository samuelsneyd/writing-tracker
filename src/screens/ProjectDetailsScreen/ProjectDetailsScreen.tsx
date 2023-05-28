import * as React from 'react';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import { DataStore } from 'aws-amplify';
import { Project, Session } from '../../models';
import { Layout, TopNavigation, Text, Divider } from '@ui-kitten/components';
import useBackNavigation from '../../hooks/useBackNavigation/useBackNavigation';
import { capitalCase } from 'change-case';
import { titleCase } from 'title-case';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Details'>

const ProjectDetailsScreen = ({ route, navigation }: Props) => {
  const [project, setProject] = useState<Project>();
  const [sessions, setSessions] = useState<Session[]>([]);
  const { BackAction } = useBackNavigation(navigation);
  const { id, name } = route.params;

  useEffect(() => {
    DataStore.query(Project, id).then(result => {
      setProject(result);
      result?.sessions.toArray().then(results => {
        setSessions(results);
      });
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title={name} alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {project
          ? <>
            <Text category="h1">{capitalCase(project.projectType)}</Text>
            <Text>{titleCase(project.name)}</Text>
            {sessions.map((session, i) =>
              <Text key={session.id}>Session {i + 1}: {session.words} words, {session.minutes} minutes</Text>)
            }
            <Text>Number of sessions: {sessions.length}</Text>
            <Text>Total words: {sessions.reduce((prev, { words: next }) => prev + next, 0)}</Text>
            <Text>Total minutes: {sessions.reduce((prev, { minutes: next }) => prev + next, 0)}</Text>
          </>
          : <Text>No project found!</Text>
        }
      </Layout>
    </SafeAreaView>
  );
};

export default ProjectDetailsScreen;
