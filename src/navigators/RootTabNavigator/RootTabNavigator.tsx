import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../types/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackNavigator from '../HomeStackNavigator/HomeStackNavigator';
import ProjectsStackNavigator from '../ProjectsStackNavigator/ProjectsStackNavigator';
import SettingsStackNavigator from '../SettingsStackNavigator/SettingsStackNavigator';
import BrowseStackNavigator from '../BrowseStackNavigator/BrowseStackNavigator';

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconMap: Record<keyof RootTabParamList, () => string> = {
            HomeStackNavigator: () => focused ? 'ios-home' : 'ios-home-outline',
            ProjectsStackNavigator: () => focused ? 'ios-book' : 'ios-book-outline',
            SettingsStackNavigator: () => focused ? 'ios-list' : 'ios-list-outline',
            BrowseStackNavigator: () => focused ? 'ios-grid' : 'ios-grid-outline',
          };

          return <Ionicons name={iconMap[route.name]()} size={size} color={color} />;
        },

        headerShown: false,
        tabBarActiveTintColor: undefined,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="HomeStackNavigator"
        options={{ title: 'Home' }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="ProjectsStackNavigator"
        options={{ title: 'Projects' }}
        component={ProjectsStackNavigator}
      />
      <Tab.Screen
        name="SettingsStackNavigator"
        options={{ title: 'Settings' }}
        component={SettingsStackNavigator}
      />
      <Tab.Screen
        name="BrowseStackNavigator"
        options={{ title: 'Browse' }}
        component={BrowseStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default RootTabNavigator;
