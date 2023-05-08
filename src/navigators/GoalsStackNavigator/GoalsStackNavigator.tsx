import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { GoalsStackParamList } from '../../types/types';
import GoalsScreen from '../../screens/GoalsScreen/GoalsScreen';

const Stack = createNativeStackNavigator<GoalsStackParamList>();

const GoalsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Goals" component={GoalsScreen} />
    </Stack.Navigator>
  );
};

export default GoalsStackNavigator;
