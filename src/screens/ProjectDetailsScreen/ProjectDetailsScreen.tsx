import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppSelector } from '../../store/hooks';
import type { ProjectsStackParamList } from '../../types/types';
import { DataStore } from 'aws-amplify';
import { Project, Session } from '../../models';
import { deserializeModel } from '@aws-amplify/datastore/ssr';
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
import { ArrowIosBackIcon, EditIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Details'>

const ProjectDetailsScreen = ({ route, navigation }: Props): React.ReactElement => {
  const { id, title } = route.params;
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);

  // Try read from redux first
  let foundReduxProject: Project | undefined;
  try {
    foundReduxProject = deserializeModel(Project, reduxProjects.find(project => project.id === id));
  } catch (e) {
    foundReduxProject = undefined;
  }

  // Try read from redux first
  let foundReduxSessions: Session[];
  try {
    foundReduxSessions = deserializeModel(Session, reduxSessions.filter(session => session.projectSessionsId === id));
  } catch (e) {
    foundReduxSessions = [];
  }

  const [project, setProject] = React.useState<Project | undefined>(foundReduxProject);
  const [sessions, setSessions] = React.useState<Session[]>(foundReduxSessions);
  const [progress, setProgress] = React.useState<number>(0);
  const [weeklyTarget, setWeeklyTarget] = React.useState<number>(0);

  React.useEffect(() => {
    // Fetch from DataStore as backup
    const getProject = async () => {
      try {
        const foundProject = await DataStore.query(Project, id);
        setProject(foundProject);
      } catch (e) {
        console.error('Error while reading project', e);
      }
    };

    getProject().then();
  }, [id]);

  React.useEffect(() => {
    // Fetch from DataStore as backup
    const getSessions = async () => {
      try {
        const foundSessions = await DataStore.query(Session, c => c.project.id.eq(id));
        setSessions(foundSessions);
      } catch (e) {
        console.error('Error while getting sessions', e);
      }
    };

    getSessions().then();
  }, [id, project]);

  React.useEffect(() => {
    // Update weekly target as sum of daily targets
    if (!project) {
      return;
    }
    const { mon, tue, wed, thu, fri, sat, sun } = project.wordTarget;
    const sumWeeklyTarget = mon.words + tue.words + wed.words + thu.words + fri.words + sat.words + sun.words;

    setWeeklyTarget(sumWeeklyTarget);
  }, [id, project]);

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

  const backAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  const editProjectAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={EditIcon}
      onPress={() => navigation.navigate('Edit', { id, title })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title={title}
        alignment="center"
        accessoryLeft={backAction}
        accessoryRight={editProjectAction}
      />
      <Divider />
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Layout style={styles.body}>
          {project
            ? <>
              <Text style={styles.title} category="h1">{project.title || 'My Project'}</Text>
              <Text>Description: {project.description}</Text>
              <Text>Type: {capitalCase(project.type)}</Text>
              <Text>Progress: {Math.round(progress * 100) || '-'}%</Text>
              <CircularProgressBar progress={progress} size="giant" />
              <Text>Status: {capitalCase(noCase(project.status))}</Text>
              <Text>Total words: {sessions.reduce((prev, { words: next }) => prev + next, 0)}</Text>
              <Text>Total minutes: {sessions.reduce((prev, { minutes: next }) => prev + next, 0)}</Text>
              <Text>Words per page: {project.wordsPerPage}</Text>
              <Text>Initial words: {project.initialWords}</Text>
              <Text>Word target: {project.overallWordTarget}</Text>
              <Text>Weekly target: {weeklyTarget}</Text>
              <Text>Daily word targets:</Text>
              <Text>Mon: {project.wordTarget?.mon?.enabled ? project.wordTarget.mon.words : 0}</Text>
              <Text>Tue: {project.wordTarget?.tue?.enabled ? project.wordTarget.tue.words : 0}</Text>
              <Text>Wed: {project.wordTarget?.wed?.enabled ? project.wordTarget.wed.words : 0}</Text>
              <Text>Thu: {project.wordTarget?.thu?.enabled ? project.wordTarget.thu.words : 0}</Text>
              <Text>Fri: {project.wordTarget?.fri?.enabled ? project.wordTarget.fri.words : 0}</Text>
              <Text>Sat: {project.wordTarget?.sat?.enabled ? project.wordTarget.sat.words : 0}</Text>
              <Text>Sun: {project.wordTarget?.sun?.enabled ? project.wordTarget.sun.words : 0}</Text>
              <Text>Number of sessions: {sessions.length}</Text>
              {sessions.map((session, i) =>
                <Text key={session.id}>Session {i + 1}: {session.words} words, {session.minutes} minutes</Text>,
              )}
            </>
            : <Text>No project found!</Text>
          }
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
    gap: 10,
  },
  title: {
    textAlign: 'center',
  },
});

export default ProjectDetailsScreen;
