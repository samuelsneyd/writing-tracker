import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SessionEditScreen from '../../screens/SessionEditScreen/SessionEditScreen';
import SessionListScreen from '../../screens/SessionListScreen/SessionListScreen';
import SessionNewScreen from '../../screens/SessionNewScreen/SessionNewScreen';
import type { ProjectsStackParamList } from '../../types/types';
import ProjectDetailsScreen from '../../screens/ProjectDetailsScreen/ProjectDetailsScreen';
import ProjectListScreen from '../../screens/ProjectListScreen/ProjectListScreen';
import ProjectNewScreen from '../../screens/ProjectNewScreen/ProjectNewScreen';
import ProjectEditScreen from '../../screens/ProjectEditScreen/ProjectEditScreen';

const Stack = createNativeStackNavigator<ProjectsStackParamList>();

const ProjectsStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProjectList" component={ProjectListScreen} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} />
      <Stack.Screen name="ProjectEdit" component={ProjectEditScreen} />
      <Stack.Screen name="ProjectNew" component={ProjectNewScreen} />
      <Stack.Screen name="SessionList" component={SessionListScreen} />
      <Stack.Screen name="SessionEdit" component={SessionEditScreen} />
      <Stack.Screen name="SessionNew" component={SessionNewScreen} />
    </Stack.Navigator>
  );
};

export default ProjectsStackNavigator;
