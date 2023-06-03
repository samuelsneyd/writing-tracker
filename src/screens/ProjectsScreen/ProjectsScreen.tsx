import * as React from 'react';
import { ListRenderItemInfo, SafeAreaView, StyleSheet, View } from 'react-native';
import { Project, ProjectStatus, ProjectType, Session } from '../../models';
import { Auth, DataStore, Predicates } from 'aws-amplify';
import type { ICredentials } from '@aws-amplify/core';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import {
  Button,
  Divider,
  List,
  ListItem,
  TopNavigation,
  TopNavigationAction, TopNavigationActionElement,
} from '@ui-kitten/components';
import BookCoverImage from '../../components/BookCoverImage/BookCoverImage';
import { MenuIcon, PlusIcon } from '../../components/Icons/Icons';
import util from '../../utils/util';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Projects'>

type ImageUri = {
  key: string,
  uri: string
};

const ProjectsScreen = ({ navigation }: Props): React.ReactElement => {
  const [showButtons, setShowButtons] = React.useState<boolean>(false);
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [sessions, setSessions] = React.useState<Session[]>([]);
  const [imageUris, setImageUris] = React.useState<ImageUri[]>([]);
  const [credentials, setCredentials] = React.useState<ICredentials>();

  React.useEffect(() => {
    const keys = [
      'fantasy_witch.jfif',
      'ink_city.jfif',
      'rainforest_van_gogh.jfif',
      'cyberpunk_cube_2.jfif',
    ];

    const images = keys.map(key => ({
      key,
      uri: util.getS3ObjectURI('/public/', key),
    }));

    setImageUris(images);
  }, []);

  React.useEffect(() => {
    DataStore.query(Project).then(items => setProjects(items));
  }, []);

  React.useEffect(() => {
    const getCredentials = async () => {
      const creds = Auth.essentialCredentials(await Auth.currentCredentials());
      setCredentials(creds);
    };

    getCredentials().then();
  }, []);

  const addProjectAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={PlusIcon}
      onPress={() => navigation.navigate('New')}
    />
  );

  const renderDrawerAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => {
      }}
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
    };
    try {
      const projects = await Promise.all([
        DataStore.save(
          new Project({
            ...defaultValues,
            name: 'My Book',
            description: 'This is a Book',
            projectType: ProjectType.BOOK,
            status: ProjectStatus.IN_PROGRESS,
          }),
        ),
        DataStore.save(
          new Project({
            ...defaultValues,
            name: 'My Journal',
            description: 'This is a Journal',
            projectType: ProjectType.JOURNAL,
            status: ProjectStatus.COMPLETED,
          }),
        ),
        DataStore.save(
          new Project({
            ...defaultValues,
            name: 'My Blog',
            description: 'This is a Blog',
            projectType: ProjectType.BLOG,
            status: ProjectStatus.ON_HOLD,
          }),
        ),
        DataStore.save(
          new Project({
            ...defaultValues,
            name: 'My Other Project',
            description: 'This is another project',
            projectType: ProjectType.OTHER,
            status: ProjectStatus.IN_PROGRESS,
          }),
        ),
      ]);
      console.log('Projects saved successfully!', projects);
      await fetchProjects();
    } catch (e) {
      console.log('Error saving book', e);
    }
  };

  const fetchProjects = async () => {
    try {
      const projects = await DataStore.query(Project);
      setProjects(projects);
      console.log('Projects retrieved successfully!', JSON.stringify(projects, null, 2));
    } catch (e) {
      console.log('Error retrieving projects', e);
      setProjects([]);
    }
  };

  const wipeProjects = async () => {
    try {
      await DataStore.delete(Project, Predicates.ALL);
      setProjects([]);
    } catch (e) {
      console.log('Error wiping projects', e);
    }
  };

  const addSessions = async () => {
    try {
      await Promise.all(projects.map(project => DataStore.save(new Session({
        project,
        words: util.getRandomInt(0, 1000),
        minutes: util.getRandomInt(0, 1000),
        date: new Date().toISOString(),
      }))));
      console.log('Sessions saved successfully!', sessions);
      await fetchSessions();
    } catch (e) {
      console.error('Error adding sessions', e);
    }
  };

  const fetchSessions = async () => {
    try {
      const sessions = await DataStore.query(Session);
      setSessions(sessions);
      console.log('Sessions retrieved successfully!', JSON.stringify(sessions, null, 2));
    } catch (e) {
      console.log('Error retrieving sessions', e);
      setSessions([]);
    }
  };

  const wipeSessions = async () => {
    try {
      await DataStore.delete(Session, Predicates.ALL);
      setSessions([]);
    } catch (e) {
      console.log('Error wiping sessions', e);
    }
  };

  const renderVerticalItem = (info: ListRenderItemInfo<Project>): React.ReactElement => {
    const { item } = info;
    return (
      <ListItem
        title={item.projectType}
        description={item.name}
        onPress={() => navigation.navigate('Details', { id: item.id, name: item.name })}
      />
    );
  };

  const renderHorizontalItem = (info: ListRenderItemInfo<Project>): React.ReactElement => {
    // TODO - use image URIs from project data
    const { uri } = imageUris[info.index % imageUris.length];
    return (
      <View style={styles.horizontalItem}>
        <BookCoverImage
          source={{
            uri,
            headers: credentials && util.getS3SignedHeaders(uri, credentials),
          }}
        />
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
      {showButtons &&
        <>
          <Button size="small" onPress={addProjects}>Add Projects</Button>
          <Button size="small" onPress={fetchProjects}>Fetch Projects</Button>
          <Button size="small" onPress={wipeProjects}>Wipe Projects</Button>
          <Button size="small" onPress={addSessions}>Add Sessions</Button>
          <Button size="small" onPress={fetchSessions}>Fetch Sessions</Button>
          <Button size="small" onPress={wipeSessions}>Wipe Sessions</Button>
        </>
      }
      <Divider />
      <List
        data={projects}
        ItemSeparatorComponent={Divider}
        renderItem={renderVerticalItem}
      />
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
  },
  horizontalItem: {
    marginHorizontal: 8,
  },
});

export default ProjectsScreen;
