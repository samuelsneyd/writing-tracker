import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import ProjectDetailsScreen from '../../screens/ProjectDetailsScreen/ProjectDetailsScreen';
import ProjectsScreen from '../../screens/ProjectsScreen/ProjectsScreen';

const Stack = createNativeStackNavigator<ProjectsStackParamList>();

const ProjectsStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen
        name="Details"
        options={({ route }) => ({ title: route.params.name })}
        component={ProjectDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default ProjectsStackNavigator;
