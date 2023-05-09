import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Project, TimeWriting, WordCount } from '../../models';
import { DataStore, Predicates } from 'aws-amplify';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProjectsStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, Button, ListItem, List } from '@ui-kitten/components';
import util from '../../utils/util';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Projects'>

const ProjectsScreen = ({ navigation }: Props) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [wordCounts, setWordCounts] = useState<WordCount[]>([]);
  const [writingTimes, setWritingTimes] = useState<TimeWriting[]>([]);

  useEffect(() => {
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

  const addWordCounts = async () => {
    try {
      await Promise.all(projects.map(project => DataStore.save(new WordCount({
        project,
        words: util.getRandomInt(1000),
        date: new Date().toISOString(),
      }))));
      console.log('Word Counts saved successfully!', wordCounts);
      await fetchWordCounts();
    } catch (e) {
      console.log('Error adding word counts', e);
    }
  };

  const fetchWordCounts = async () => {
    try {
      const wordCounts = await DataStore.query(WordCount);
      setWordCounts(wordCounts);
      console.log('Word counts retrieved successfully!', JSON.stringify(wordCounts, null, 2));
    } catch (e) {
      console.log('Error retrieving word counts', e);
      setWordCounts([]);
    }
  };

  const wipeWordCounts = async () => {
    try {
      await DataStore.delete(WordCount, Predicates.ALL);
      setWordCounts([]);
    } catch (e) {
      console.log('Error wiping word counts', e);
    }
  };

  const addTimeWritings = async () => {
    try {
      await Promise.all(projects.map(project => DataStore.save(new TimeWriting({
        project,
        minutes: util.getRandomInt(360),
        date: new Date().toISOString(),
      }))));
      console.log('Writing Times saved successfully!', wordCounts);
      await fetchTimeWritings();
    } catch (e) {
      console.log('Error adding writing times', e);
    }
  };

  const fetchTimeWritings = async () => {
    try {
      const writingTimes = await DataStore.query(TimeWriting);
      setWritingTimes(writingTimes);
      console.log('Time writings retrieved successfully!', JSON.stringify(writingTimes, null, 2));
    } catch (e) {
      console.log('Error retrieving writing times', e);
      setWritingTimes([]);
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
        {/*<Button size="small" onPress={addProjects}>Add Projects</Button>*/}
        <Button size="small" onPress={fetchProjects}>Fetch Projects</Button>
        {/*<Button size="small" onPress={wipeProjects}>Wipe Projects</Button>*/}
        {/*<Button size="small" onPress={addWordCounts}>Add Word Counts</Button>*/}
        <Button size="small" onPress={fetchWordCounts}>Fetch Word Counts</Button>
        {/*<Button size="small" onPress={wipeWordCounts}>Wipe Word Counts</Button>*/}
        {/*<Button size="small" onPress={addTimeWritings}>Add Writing Times</Button>*/}
        <Button size="small" onPress={fetchTimeWritings}>Fetch Writing Times</Button>
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
