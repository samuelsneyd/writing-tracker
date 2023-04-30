import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GoalsStackParamList } from '../../types/types';
import GoalsScreen from '../../screens/GoalsScreen/GoalsScreen';

const GoalsStack = createNativeStackNavigator<GoalsStackParamList>();

const GoalsStackNavigator = () => {
  return (
    <GoalsStack.Navigator>
      <GoalsStack.Screen name="Goals" component={GoalsScreen} />
    </GoalsStack.Navigator>
  );
};

export default GoalsStackNavigator;
