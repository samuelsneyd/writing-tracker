import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import ProjectDetailsScreen from '../../screens/ProjectDetailsScreen/ProjectDetailsScreen';
import ProjectsScreen from '../../screens/ProjectsScreen/ProjectsScreen';
import ProjectNewScreen from '../../screens/ProjectNewScreen/ProjectNewScreen';

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
      <Stack.Screen name="New" component={ProjectNewScreen} />
    </Stack.Navigator>
  );
};

export default ProjectsStackNavigator;
