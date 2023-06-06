import * as React from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import { DataStore } from 'aws-amplify';
import { Project, Session } from '../../models';
import {
  CircularProgressBar,
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionElement,
} from '@ui-kitten/components';
import { capitalCase, noCase } from 'change-case';
import { titleCase } from 'title-case';
import { ArrowIosBackIcon, EditIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Details'>

const ProjectDetailsScreen = ({ route, navigation }: Props): React.ReactElement => {
  const [project, setProject] = React.useState<Project>();
  const [sessions, setSessions] = React.useState<Session[]>([]);
  const [progress, setProgress] = React.useState<number>(0);
  const { id, title } = route.params;

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

  React.useEffect(() => {
    if (!project || sessions.length === 0) {
      setProgress(0);
      return;
    }
    const totalSessionWords = sessions.reduce((prev, { words: next }) => prev + next, 0);
    const totalWords = totalSessionWords + project.initialWords;
    const calculatedProgress = totalWords / project.overallWordTarget;

    setProgress(calculatedProgress);
  }, [project, sessions]);

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  const editProjectAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={EditIcon}
      // TODO - pass project id into edit screen as prop
      // onPress={() => navigation.navigate('New')}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title={title}
        alignment="center"
        accessoryLeft={BackAction}
        accessoryRight={editProjectAction}
      />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {project
          ? <>
            <Text category="h1">{capitalCase(project.type)}</Text>
            <Text>Title: {titleCase(project.title)}</Text>
            <Text>Description: {project.description}</Text>
            <Text>Status: {titleCase(noCase(project.status))}</Text>
            {sessions.map((session, i) =>
              <Text key={session.id}>Session {i + 1}: {session.words} words, {session.minutes} minutes</Text>,
            )}
            <Text>Number of sessions: {sessions.length}</Text>
            <Text>Total words: {sessions.reduce((prev, { words: next }) => prev + next, 0)}</Text>
            <Text>Total minutes: {sessions.reduce((prev, { minutes: next }) => prev + next, 0)}</Text>
            <Text>Words per page: {project.wordsPerPage}</Text>
            <Text>Initial words: {project.initialWords}</Text>
            <Text>Word target: {project.overallWordTarget}</Text>
            <Text>Daily word targets:</Text>
            <Text>Mon: {project.wordTarget?.mon?.enabled ? project.wordTarget.mon.words : 0}</Text>
            <Text>Tue: {project.wordTarget?.tue?.enabled ? project.wordTarget.tue.words : 0}</Text>
            <Text>Wed: {project.wordTarget?.wed?.enabled ? project.wordTarget.wed.words : 0}</Text>
            <Text>Thu: {project.wordTarget?.thu?.enabled ? project.wordTarget.thu.words : 0}</Text>
            <Text>Fri: {project.wordTarget?.fri?.enabled ? project.wordTarget.fri.words : 0}</Text>
            <Text>Sat: {project.wordTarget?.sat?.enabled ? project.wordTarget.sat.words : 0}</Text>
            <Text>Sun: {project.wordTarget?.sun?.enabled ? project.wordTarget.sun.words : 0}</Text>
            <Text>Progress: {Math.round(progress * 100)}%</Text>
            <CircularProgressBar
              progress={progress}
              size="giant"
            />
          </>
          : <Text>No project found!</Text>
        }
      </Layout>
    </SafeAreaView>
  );
};

export default ProjectDetailsScreen;
