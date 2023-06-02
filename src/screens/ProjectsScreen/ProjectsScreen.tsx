import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Project, ProjectStatus, ProjectType, Session } from '../../models';
import { Auth, DataStore, Predicates, Storage } from 'aws-amplify';
import type { ICredentials } from '@aws-amplify/core';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import {
  Divider,
  Icon,
  IconProps,
  Layout,
  List,
  ListItem,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import FastImage from 'react-native-fast-image';
import util from '../../utils/util';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Projects'>

type ImageUri = {
  key: string,
  uri: string
};

const ProjectsScreen = ({ navigation }: Props) => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [sessions, setSessions] = React.useState<Session[]>([]);
  const [imageUris, setImageUris] = React.useState<ImageUri[]>([]);
  const [credentials, setCredentials] = React.useState<ICredentials>();

  React.useEffect(() => {
    const getImageURIsFromS3 = async () => {
      try {
        const keysToGet = [
          'fantasy_witch.jfif',
          'ink_city.jfif',
        ];

        const uris = await Promise.all(keysToGet.map(async key => {
          const uri = await Storage.get(key);
          // Remove sign
          return uri.split('?')[0];
        }));
        const images = keysToGet.map((key, i) => ({ key, uri: uris[i] }));

        setImageUris(images);
      } catch (e) {
        console.error(e);
      }
    };

    getImageURIsFromS3().then();
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

  const AddIcon = (props: IconProps) => (
    <Icon {...props} name="plus-outline" />
  );

  const addProjectButton = () => (
    <TopNavigationAction icon={AddIcon} />
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
        words: util.getRandomInt(1000),
        minutes: util.getRandomInt(1000),
        date: new Date().toISOString(),
      }))));
      console.log('Sessions saved successfully!', sessions);
      await fetchSessions();
    } catch (e) {
      console.log('Error adding sessions', e);
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

  const renderItem = ({ item }: { item: Project }) => {
    return (
      <ListItem
        title={item.projectType}
        description={item.name}
        onPress={() => navigation.navigate('Details', { id: item.id, name: item.name })}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Projects" alignment="center" accessoryRight={addProjectButton} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Projects</Text>
        <Layout style={{ flexDirection: 'row' }}>
          {imageUris && credentials
            ? imageUris.map(({ key, uri }) =>
              <FastImage
                key={key}
                source={{ uri, headers: util.getS3SignedHeaders(uri, credentials) }}
                style={styles.bookCover}
              />,
            )
            : null
          }
        </Layout>
        {/*<Button size="small" onPress={addProjects}>Add Projects</Button>*/}
        {/*<Button size="small" onPress={fetchProjects}>Fetch Projects</Button>*/}
        {/*<Button size="small" onPress={wipeProjects}>Wipe Projects</Button>*/}
        {/*<Button size="small" onPress={addSessions}>Add Sessions</Button>*/}
        {/*<Button size="small" onPress={fetchSessions}>Fetch Sessions</Button>*/}
        {/*<Button size="small" onPress={wipeSessions}>Wipe Sessions</Button>*/}
        <Divider />
      </Layout>
      <List
        style={styles.container}
        data={projects}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  bookCover: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 1,
  },
});

export default ProjectsScreen;
