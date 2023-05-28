import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Project, Session } from '../../models';
import { DataStore, Predicates } from 'aws-amplify';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, Button, ListItem, List } from '@ui-kitten/components';
import util from '../../utils/util';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Projects'>

const ProjectsScreen = ({ navigation }: Props) => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [sessions, setSessions] = React.useState<Session[]>([]);

  React.useEffect(() => {
    DataStore.query(Project).then(items => setProjects(items));
  }, []);

  const addProjects = async () => {
    try {
      const projects = await Promise.all([
        DataStore.save(
          new Project({
            name: 'This is a Book',
            projectType: 'BOOK',
          }),
        ),
        DataStore.save(
          new Project({
            name: 'This is a Journal',
            projectType: 'JOURNAL',
          }),
        ),
        DataStore.save(
          new Project({
            name: 'This is a Blog',
            projectType: 'BLOG',
          }),
        ),
        DataStore.save(
          new Project({
            name: 'This is another project',
            projectType: 'OTHER',
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
      <TopNavigation title="Projects" alignment="center" />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Projects</Text>
        <Button size="small" onPress={addProjects}>Add Projects</Button>
        {/*<Button size="small" onPress={fetchProjects}>Fetch Projects</Button>*/}
        <Button size="small" onPress={wipeProjects}>Wipe Projects</Button>
        <Button size="small" onPress={addSessions}>Add Sessions</Button>
        {/*<Button size="small" onPress={fetchSessions}>Fetch Sessions</Button>*/}
        <Button size="small" onPress={wipeSessions}>Wipe Sessions</Button>
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
});

export default ProjectsScreen;
