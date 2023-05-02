import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddDataStackParamList } from '../../types/types';
import AddDataScreen from '../../screens/AddDataScreen/AddDataScreen';

const Stack = createNativeStackNavigator<AddDataStackParamList>();

const AddDataStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddData" options={{ title: 'Add Words' }} component={AddDataScreen} />
    </Stack.Navigator>
  );
};

export default AddDataStackNavigator;
