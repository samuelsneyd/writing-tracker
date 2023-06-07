import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import ProjectDetailsScreen from '../../screens/ProjectDetailsScreen/ProjectDetailsScreen';
import ProjectsScreen from '../../screens/ProjectsScreen/ProjectsScreen';
import ProjectNewScreen from '../../screens/ProjectNewScreen/ProjectNewScreen';
import ProjectEditScreen from '../../screens/ProjectEditScreen/ProjectEditScreen';

const Stack = createNativeStackNavigator<ProjectsStackParamList>();

const ProjectsStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen
        name="Details"
        options={({ route }) => ({ title: route.params.title })}
        component={ProjectDetailsScreen}
      />
      <Stack.Screen
        name="Edit"
        options={({ route }) => ({ title: route.params.title })}
        component={ProjectEditScreen}
      />
      <Stack.Screen name="New" component={ProjectNewScreen} />
    </Stack.Navigator>
  );
};

export default ProjectsStackNavigator;
