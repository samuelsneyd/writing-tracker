import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChartsScreen from '../../screens/ChartsScreen/ChartsScreen';
import type { ChartsStackParamList } from '../../types/types';

const Stack = createNativeStackNavigator<ChartsStackParamList>();

const ChartsStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Charts" options={{ title: 'Add Words' }} component={ChartsScreen} />
    </Stack.Navigator>
  );
};

export default ChartsStackNavigator;