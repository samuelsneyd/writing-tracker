import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SessionListScreen from '../../screens/SessionListScreen/SessionListScreen';
import SessionNewScreen from '../../screens/SessionNewScreen/SessionNewScreen';
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
        name="EditProject"
        options={({ route }) => ({ title: route.params.title })}
        component={ProjectEditScreen}
      />
      <Stack.Screen name="NewProject" component={ProjectNewScreen} />
      <Stack.Screen name="NewSession" component={SessionNewScreen} />
      <Stack.Screen name="ListSessions" component={SessionListScreen} />
    </Stack.Navigator>
  );
};

export default ProjectsStackNavigator;
