import * as React from 'react';
import { ListRenderItemInfo, SafeAreaView, StyleSheet, View } from 'react-native';
import { Auth, DataStore, Predicates } from 'aws-amplify';
import { Project, ProjectStatus, ProjectType, Session } from '../../models';
import { deserializeModel, serializeModel } from '@aws-amplify/datastore/ssr';
import type { ICredentials } from '@aws-amplify/core';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SerializedProject, SerializedSession } from '../../models/serialized';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { projectsSet } from '../../store/projects/projectsSlice';
import { sessionsSet } from '../../store/sessions/sessionsSlice';
import type { ProjectsStackParamList } from '../../types/types';
import {
  Button,
  Divider,
  Layout,
  List,
  ListItem,
  Text,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionElement,
} from '@ui-kitten/components';
import BookCoverImage from '../../components/BookCoverImage/BookCoverImage';
import { MenuIcon, PlusIcon } from '../../components/Icons/Icons';
import util, { S3SignedHeaders } from '../../utils/util';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Projects'>

type ImageUri = {
  key: string,
  uri: string,
  headers: S3SignedHeaders,
};

type ProjectAggregateStats = {
  words: number,
  minutes: number,
};

const ProjectsScreen = ({ navigation }: Props): React.ReactElement => {
  const dispatch = useAppDispatch();
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);

  // Try read from redux first
  let foundReduxProjects: Project[];
  try {
    foundReduxProjects = deserializeModel(Project, reduxProjects as unknown as Project[]);
  } catch (e) {
    foundReduxProjects = [];
  }

  // Try read from redux first
  let foundReduxSessions: Session[];
  try {
    foundReduxSessions = deserializeModel(Session, reduxSessions as unknown as Session[]);
  } catch (e) {
    foundReduxSessions = [];
  }

  const [showButtons, setShowButtons] = React.useState<boolean>(false);
  const [projects, setProjects] = React.useState<Project[]>(foundReduxProjects);
  const [sessions, setSessions] = React.useState<Session[]>(foundReduxSessions);
  const [imageUris, setImageUris] = React.useState<ImageUri[]>([]);
  const [credentials, setCredentials] = React.useState<ICredentials>();
  const [aggregateStats, setAggregateStats] = React.useState<ProjectAggregateStats>({ words: 0, minutes: 0 });

  React.useEffect(() => {
    // Load from DataStore and update Redux
    const getProjects = async () => {
      const foundProjects = await DataStore.query(Project);
      setProjects(foundProjects);
      dispatch(projectsSet(serializeModel(foundProjects) as unknown as SerializedProject[]));
    };

    getProjects().then();
  }, []);

  React.useEffect(() => {
    // Load from DataStore and update Redux
    const getSessions = async () => {
      const foundSessions = await DataStore.query(Session);
      setSessions(foundSessions);
      dispatch(sessionsSet(serializeModel(foundSessions) as unknown as SerializedSession[]));
    };

    getSessions().then();
  }, []);

  React.useEffect(() => {
    setAggregateStats(sessions.reduce((prev, { words, minutes }) => ({
      words: prev.words + words,
      minutes: prev.minutes + minutes,
    }), { words: 0, minutes: 0 }));
  }, [projects, sessions]);

  React.useEffect(() => {
    const getCredentials = async () => {
      const creds = Auth.essentialCredentials(await Auth.currentCredentials());
      setCredentials(creds);
    };

    getCredentials().then();
  }, []);

  React.useEffect(() => {
    if (!credentials) {
      return;
    }

    const keys = [
      'fantasy_witch.jfif',
      'ink_city.jfif',
      'rainforest_van_gogh.jfif',
      'old_leather_book_1.jfif',
      'newspaper_roll.jfif',
      '18th_century_room.jfif',
      'da_vinci_quill.jfif',
      'cyberpunk_cube_2.jfif',
      'da_vinci_feather.jfif',
    ];

    const images = keys.map(key => {
      const uri = util.getS3ObjectURI('/public/', key);
      const headers = util.getS3SignedHeaders(uri, credentials);
      return { key, uri, headers };
    });

    setImageUris(images);
  }, [credentials]);

  const addProjectAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={PlusIcon}
      onPress={() => navigation.navigate('New')}
    />
  );

  const renderDrawerAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => undefined}
    />
  );

  const addProjects = async () => {
    const defaultValues = {
      wordsPerPage: 250,
      wordTarget: {
        mon: { enabled: true, words: 500 },
        tue: { enabled: true, words: 500 },
        wed: { enabled: true, words: 500 },
        thu: { enabled: true, words: 500 },
        fri: { enabled: true, words: 500 },
        sat: { enabled: false, words: 0 },
        sun: { enabled: false, words: 0 },
      },
      sessions: [],
    };
    try {
      const newProjects = await Promise.all([
        DataStore.save(
          new Project({
            ...defaultValues,
            title: 'My Book',
            description: 'This is a Book',
            type: ProjectType.BOOK,
            status: ProjectStatus.IN_PROGRESS,
            initialWords: util.getRandomInt(0, 10000),
            overallWordTarget: util.getRandomInt(10000, 200000),
          }),
        ),
        DataStore.save(
          new Project({
            ...defaultValues,
            title: 'My Journal',
            description: 'This is a Journal',
            type: ProjectType.JOURNAL,
            status: ProjectStatus.COMPLETED,
            initialWords: util.getRandomInt(0, 10000),
            overallWordTarget: util.getRandomInt(10000, 200000),
          }),
        ),
        DataStore.save(
          new Project({
            ...defaultValues,
            title: 'My Blog',
            description: 'This is a Blog',
            type: ProjectType.BLOG,
            status: ProjectStatus.ON_HOLD,
            initialWords: util.getRandomInt(0, 10000),
            overallWordTarget: util.getRandomInt(10000, 200000),
          }),
        ),
        DataStore.save(
          new Project({
            ...defaultValues,
            title: 'My Other Project',
            description: 'This is another project',
            type: ProjectType.OTHER,
            status: ProjectStatus.IN_PROGRESS,
            initialWords: util.getRandomInt(0, 10000),
            overallWordTarget: util.getRandomInt(10000, 200000),
          }),
        ),
      ]);
      console.log('Projects saved successfully!', newProjects);
      await fetchProjects();
    } catch (e) {
      console.log('Error saving book', e);
    }
  };

  const fetchProjects = async () => {
    try {
      const foundProjects = await DataStore.query(Project);
      setProjects(foundProjects);
      dispatch(projectsSet(serializeModel(foundProjects) as unknown as SerializedProject[]));
      console.log('Projects retrieved successfully!', JSON.stringify(foundProjects, null, 2));
    } catch (e) {
      console.log('Error retrieving projects', e);
      setProjects([]);
      dispatch(projectsSet([]));
    }
  };

  const wipeProjects = async () => {
    try {
      await DataStore.delete(Project, Predicates.ALL);
      setProjects([]);
      dispatch(projectsSet([]));
    } catch (e) {
      console.log('Error wiping projects', e);
    }
  };

  const addSessions = async () => {
    try {
      await Promise.all(projects.map(project => DataStore.save(new Session({
        project,
        words: util.getRandomInt(0, 1000),
        minutes: util.getRandomInt(0, 60),
        date: new Date().toISOString(),
      }))));
      console.log('Sessions saved successfully!');
      await fetchSessions();
    } catch (e) {
      console.error('Error adding sessions', e);
    }
  };

  const fetchSessions = async () => {
    try {
      const foundSessions = await DataStore.query(Session);
      setSessions(foundSessions);
      dispatch(sessionsSet(serializeModel(foundSessions) as unknown as SerializedSession[]));
      console.log('Sessions retrieved successfully!', JSON.stringify(foundSessions, null, 2));
    } catch (e) {
      console.log('Error retrieving sessions', e);
      setSessions([]);
      dispatch(sessionsSet([]));
    }
  };

  const wipeSessions = async () => {
    try {
      await DataStore.delete(Session, Predicates.ALL);
      setSessions([]);
      dispatch(sessionsSet([]));
    } catch (e) {
      console.log('Error wiping sessions', e);
    }
  };

  const wipeLocal = async () => {
    await DataStore.clear();
  };

  const renderVerticalItem = (info: ListRenderItemInfo<Project>): React.ReactElement => {
    const { item } = info;
    return (
      <ListItem
        title={item.title || 'New Project'}
        description={item.description}
        onPress={() => navigation.navigate('Details', { id: item.id, title: item.title })}
      />
    );
  };

  const renderHorizontalItem = (info: ListRenderItemInfo<Project>): React.ReactElement => {
    // TODO - use image URIs from project data
    if (imageUris.length === 0) {
      // Temporary measure to avoid type error on reading URI
      // Should be redundant when pulling URIs form project data
      return (
        <View style={styles.horizontalItem}>
          <BookCoverImage />
        </View>
      );
    }
    const { uri, headers } = imageUris[info.index % imageUris.length];
    return (
      <View style={styles.horizontalItem}>
        <BookCoverImage source={{ uri, headers }} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title="Projects"
        alignment="center"
        accessoryLeft={renderDrawerAction}
        accessoryRight={addProjectAction}
      />
      <Divider />
      <List
        contentContainerStyle={styles.horizontalList}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        data={projects}
        renderItem={renderHorizontalItem}
      />
      <Divider />
      <Layout style={styles.aggregateText} level="1">
        <Text>{projects.length.toLocaleString()} project{projects.length === 1 ? '' : 's'}</Text>
        <Text>{sessions.length.toLocaleString()} session{sessions.length === 1 ? '' : 's'}</Text>
        <Text>{aggregateStats.words.toLocaleString()} word{aggregateStats.words === 1 ? '' : 's'}</Text>
        <Text>
          {Math.floor(aggregateStats.minutes / 60).toLocaleString()} hour{Math.floor(aggregateStats.minutes / 60) === 1 ? '' : 's'},
          {' '}{(aggregateStats.minutes % 60).toLocaleString()} minute{aggregateStats.minutes % 60 === 1 ? '' : 's'}
        </Text>
      </Layout>
      <Divider />
      <List
        style={styles.verticalList}
        data={projects}
        ItemSeparatorComponent={Divider}
        renderItem={renderVerticalItem}
      />
      {showButtons &&
        <>
          <Button size="small" onPress={addProjects}>Add Projects</Button>
          <Button size="small" onPress={fetchProjects}>Fetch Projects</Button>
          <Button size="small" onPress={wipeProjects}>Wipe Projects</Button>
          <Button size="small" onPress={addSessions}>Add Sessions</Button>
          <Button size="small" onPress={fetchSessions}>Fetch Sessions</Button>
          <Button size="small" onPress={wipeSessions}>Wipe Sessions</Button>
          <Button size="small" onPress={wipeLocal}>Wipe Local</Button>
        </>
      }
      <Button size="small" onPress={() => setShowButtons(!showButtons)}>Toggle dev buttons</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalList: {
    marginVertical: 16,
    paddingHorizontal: 16,
    height: 250,
  },
  horizontalItem: {
    marginHorizontal: 8,
  },
  verticalList: {
    maxHeight: 200,
  },
  aggregateText: {
    alignItems: 'center',
    paddingVertical: 8,
  },
});

export default ProjectsScreen;
