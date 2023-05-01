import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BrowseStackParamList } from '../../types/types';
import BrowseScreen from '../../screens/BrowseScreen/BrowseScreen';

const Stack = createNativeStackNavigator<BrowseStackParamList>();

const BrowseStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Browse" options={{ title: 'More' }} component={BrowseScreen} />
    </Stack.Navigator>
  );
};

export default BrowseStackNavigator;
