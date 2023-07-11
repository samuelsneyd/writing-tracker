import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import type { ProfileStackParamList } from '../../types/types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = (): React.ReactElement => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export default ProfileStackNavigator;
