import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import { DataStore } from 'aws-amplify';
import { Project } from '../../models';
import { capitalCase } from 'change-case';
import { titleCase } from 'title-case';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Details'>

const ProjectDetailsScreen = ({ route }: Props) => {
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    DataStore.query(Project, id).then(result => setProject(result));
  }, []);
  const { id } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {project
        ? <>
          <Text>{capitalCase(project.projectType)}</Text>
          <Text>{titleCase(project.name)}</Text>
        </>
        : <Text>No project found!</Text>
      }
    </View>
  );
};

export default ProjectDetailsScreen;
