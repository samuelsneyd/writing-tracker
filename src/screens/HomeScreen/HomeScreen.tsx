import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { DataStore } from 'aws-amplify';
import { Project } from '../../models';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/types';


const saveProjects = async () => {
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
          projectType: 'JOURNAL'
        })
      ),
      DataStore.save(
        new Project({
          name: 'This is a Blog',
          projectType: 'BLOG'
        })
      ),
      DataStore.save(
        new Project({
          name: 'This is another project',
          projectType: 'OTHER'
        })
      ),
    ]);
    console.log('Projects saved successfully!', projects);
  } catch (error) {
    console.log('Error saving book', error);
  }
};

const fetchProjects = async () => {
  try {
    const projects = await DataStore.query(Project);
    console.log('Posts retrieved successfully!', JSON.stringify(projects, null, 2));
  } catch (error) {
    console.log('Error retrieving books', error);
  }
};

/**
 * Wipes the local data store only, leaving the cloud store untouched.
 */
const wipeDataStore = async () => {
  try {
    await DataStore.clear();
  } catch (error) {
    console.log('Error wiping data', error);
  }
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const sub = DataStore.observeQuery(Project, project => project).subscribe(({ items }) => {
      setProjects(items);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: 'skyblue', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Button title="Add Data" onPress={saveProjects} />
        <Button title="Fetch Data" onPress={fetchProjects} />
        <Button title="Wipe Local Data" onPress={wipeDataStore} />
        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      </View>
      <View style={{ flex: 3, backgroundColor: 'steelblue', justifyContent: 'space-evenly', alignItems: 'center' }}>
        {projects.map(project =>
          <Text style={{ color: 'white' }} key={project.id}>{project.projectType}: {project.name}</Text>)}
      </View>
    </View>
  );
};

export default HomeScreen;
