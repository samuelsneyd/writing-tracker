import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThemesScreen from '../../screens/ThemesScreen/ThemesScreen';
import { ThemesStackParamList } from '../../types/types';

const Stack = createNativeStackNavigator<ThemesStackParamList>();

const ThemesStackNavigator = (): React.ReactElement => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Themes" component={ThemesScreen} />
  </Stack.Navigator>
);

export default ThemesStackNavigator;
