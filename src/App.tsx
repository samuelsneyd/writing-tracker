import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { withAuthenticator } from 'aws-amplify-react-native';
import type { RootStackParamList, RootTabParamList } from './types/types';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen/ProjectsScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import BrowseScreen from './screens/BrowseScreen/BrowseScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const App = () => {
  return (
    <>
      {/*<NavigationContainer>*/}
      {/*  <Stack.Navigator>*/}
      {/*    <Stack.Screen name="Home" options={{ title: 'Overview' }} component={HomeScreen} />*/}
      {/*    <Stack.Screen*/}
      {/*      name="Details"*/}
      {/*      options={({ route }) => ({ title: route.params.name })}*/}
      {/*      component={ProjectDetailsScreen}*/}
      {/*    />*/}
      {/*  </Stack.Navigator>*/}
      {/*</NavigationContainer>*/}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              const iconMap: Record<keyof RootTabParamList, () => string> = {
                'Home': () => focused ? 'ios-home' : 'ios-home-outline',
                'Projects': () => focused ? 'ios-book' : 'ios-book-outline',
                'Settings': () => focused ? 'ios-list' : 'ios-list-outline',
                'Browse': () => focused ? 'ios-grid' : 'ios-grid-outline',
              };

              return <Ionicons name={iconMap[route.name]()} size={size} color={color} />;
            },

            tabBarActiveTintColor: undefined,
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Projects" component={ProjectsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Browse" component={BrowseScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default withAuthenticator(App);
