import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddDataStackParamList } from '../../types/types';
import AddDataScreen from '../../screens/AddDataScreen/AddDataScreen';

const AddDataStack = createNativeStackNavigator<AddDataStackParamList>();

const AddDataStackNavigator = () => {
  return (
    <AddDataStack.Navigator>
      <AddDataStack.Screen name="AddData" options={{ title: 'Add Words' }} component={AddDataScreen} />
    </AddDataStack.Navigator>
  );
};

export default AddDataStackNavigator;
