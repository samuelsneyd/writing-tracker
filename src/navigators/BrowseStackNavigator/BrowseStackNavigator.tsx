import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BrowseStackParamList } from '../../types/types';
import BrowseScreen from '../../screens/BrowseScreen/BrowseScreen';

const BrowseStack = createNativeStackNavigator<BrowseStackParamList>();

const BrowseStackNavigator = () => {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen name="Browse" options={{ title: 'More' }} component={BrowseScreen} />
    </BrowseStack.Navigator>
  );
};

export default BrowseStackNavigator;
