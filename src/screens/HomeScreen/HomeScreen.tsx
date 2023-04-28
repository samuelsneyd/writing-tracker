import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { DataStore, Predicates } from 'aws-amplify';
import { Project } from '../../models';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/types';
import { capitalCase } from 'change-case';
import { titleCase } from 'title-case';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [projects, setProjects] = useState<Project[]>([]);

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
    } catch (error) {
      console.log('Error saving book', error);
    }
  };

  const fetchProjects = async () => {
    try {
      const projects = await DataStore.query(Project);
      setProjects(projects);
      console.log('Projects retrieved successfully!', JSON.stringify(projects, null, 2));
    } catch (error) {
      console.log('Error retrieving projects', error);
      setProjects([]);
    }
  };

  const wipeProjects = async () => {
    try {
      await DataStore.delete(Project, Predicates.ALL);
      setProjects([]);
    } catch (error) {
      console.log('Error wiping data', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: 'skyblue', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Button title="Add Data" onPress={addProjects} />
        <Button title="Fetch Data" onPress={fetchProjects} />
        <Button title="Wipe Data" onPress={wipeProjects} />
      </View>
      <View style={{ flex: 3, backgroundColor: 'steelblue', justifyContent: 'space-evenly', alignItems: 'center' }}>
        {projects.map(project =>
          <Button
            key={project.id}
            title={`${capitalCase(project.projectType)}: ${titleCase(project.name)}`}
            onPress={() => navigation.navigate('Details', { id: project.id })}
          />,
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
