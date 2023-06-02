import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { MoreStackParamList } from '../../types/types';
import MoreScreen from '../../screens/MoreScreen/MoreScreen';
import AwardsScreen from '../../screens/AwardsScreen/AwardsScreen';
import ThemesScreen from '../../screens/ThemesScreen/ThemesScreen';
import ChallengesScreen from '../../screens/ChallengesScreen/ChallengesScreen';
import ChartsScreen from '../../screens/ChartsScreen/ChartsScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';

const Stack = createNativeStackNavigator<MoreStackParamList>();

const MoreStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="More" options={{ title: 'More' }} component={MoreScreen} />
      <Stack.Screen name="Awards" options={{ title: 'Awards' }} component={AwardsScreen} />
      <Stack.Screen name="Themes" options={{ title: 'Themes' }} component={ThemesScreen} />
      <Stack.Screen name="Challenges" options={{ title: 'Challenges' }} component={ChallengesScreen} />
      <Stack.Screen name="Charts" options={{ title: 'Charts' }} component={ChartsScreen} />
      <Stack.Screen name="Settings" options={{ title: 'Settings' }} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MoreStackNavigator;
