import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { MoreStackParamList } from '../../types/types';
import MoreScreen from '../../screens/MoreScreen/MoreScreen';
import AwardsScreen from '../../screens/AwardsScreen/AwardsScreen';
import ThemesScreen from '../../screens/ThemesScreen/ThemesScreen';
import ChallengesScreen from '../../screens/ChallengesScreen/ChallengesScreen';
import GoalsScreen from '../../screens/GoalsScreen/GoalsScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';

const Stack = createNativeStackNavigator<MoreStackParamList>();

const MoreStackNavigator = (): React.ReactElement => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="More" component={MoreScreen} />
    <Stack.Screen name="Awards" component={AwardsScreen} />
    <Stack.Screen name="Themes" component={ThemesScreen} />
    <Stack.Screen name="Challenges" component={ChallengesScreen} />
    <Stack.Screen name="Goals" component={GoalsScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);

export default MoreStackNavigator;
