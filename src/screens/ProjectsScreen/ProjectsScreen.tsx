import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Project, WordCount } from '../../models';
import { DataStore, Predicates } from 'aws-amplify';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProjectsStackParamList } from '../../types/types';
import { capitalCase } from 'change-case';
import { titleCase } from 'title-case';
import util from '../../utils/util';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Projects'>

const ProjectsScreen = ({ navigation }: Props) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [wordCounts, setWordCounts] = useState<WordCount[]>([]);

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
      console.log('Error retrieving projects', e);
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

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Projects</Text>
      </View>
      <View style={{ flex: 2, justifyContent: 'space-around' }}>
        <Button title="Add Projects" onPress={addProjects} />
        <Button title="Fetch Projects" onPress={fetchProjects} />
        <Button title="Wipe Projects" onPress={wipeProjects} />
        <Button title="Add Word Counts" onPress={addWordCounts} />
        <Button title="Fetch Word Counts" onPress={fetchWordCounts} />
        <Button title="Wipe Word Counts" onPress={wipeWordCounts} />
      </View>
      <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
        {projects.map(project =>
          <Button
            key={project.id}
            title={`${capitalCase(project.projectType)}: ${titleCase(project.name)}`}
            onPress={() => navigation.navigate('Details', { id: project.id, name: project.name })}
          />,
        )}
      </View>
    </View>
  );
};

export default ProjectsScreen;
