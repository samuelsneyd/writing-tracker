import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProjectsStackParamList } from '../../types/types';
import ProjectDetailsScreen from '../../screens/ProjectDetailsScreen/ProjectDetailsScreen';
import ProjectsScreen from '../../screens/ProjectsScreen/ProjectsScreen';

const ProjectsStack = createNativeStackNavigator<ProjectsStackParamList>();

const ProjectsStackNavigator = () => {
  return (
    <ProjectsStack.Navigator>
      <ProjectsStack.Screen name="Projects" component={ProjectsScreen} />
      <ProjectsStack.Screen
        name="Details"
        options={({ route }) => ({ title: route.params.name })}
        component={ProjectDetailsScreen}
      />
    </ProjectsStack.Navigator>
  );
};

export default ProjectsStackNavigator;
