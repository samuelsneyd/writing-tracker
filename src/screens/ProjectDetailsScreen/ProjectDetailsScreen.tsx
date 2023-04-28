import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/types';
import { DataStore } from 'aws-amplify';
import { Project } from '../../models';
import { capitalCase } from 'change-case';
import { titleCase } from 'title-case';


type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const ProjectDetailsScreen = ({ route, navigation }: DetailsScreenProps) => {
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
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ProjectDetailsScreen;
