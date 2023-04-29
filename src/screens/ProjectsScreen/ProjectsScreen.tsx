import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Project } from '../../models';
import { DataStore, Predicates } from 'aws-amplify';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProjectsStackParamList } from '../../types/types';
import { capitalCase } from 'change-case';
import { titleCase } from 'title-case';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Projects'>

const ProjectsScreen = ({ navigation }: Props) => {
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
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Projects</Text>
      </View>
      <View style={{ flex: 2, justifyContent: 'space-around' }}>
        <Button title="Add Data" onPress={addProjects} />
        <Button title="Fetch Data" onPress={fetchProjects} />
        <Button title="Wipe Data" onPress={wipeProjects} />
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
