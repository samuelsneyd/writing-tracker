import * as React from 'react';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Divider, Icon } from '@ui-kitten/components';
import type { RootTabParamList } from '../../types/types';
import HomeStackNavigator from '../HomeStackNavigator/HomeStackNavigator';
import ProjectsStackNavigator from '../ProjectsStackNavigator/ProjectsStackNavigator';
import MoreStackNavigator from '../MoreStackNavigator/MoreStackNavigator';
import AddDataStackNavigator from '../AddDataNavigator/AddDataStackNavigator';
import GoalsStackNavigator from '../GoalsStackNavigator/GoalsStackNavigator';

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabBar = ({ navigation, state }: BottomTabBarProps): React.ReactElement => {
  return (
    <>
      <Divider />
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}
      >
        <BottomNavigationTab title="Home" icon={<Icon name="home-outline" />} />
        <BottomNavigationTab title="Projects" icon={<Icon name="book-open-outline" />} />
        <BottomNavigationTab title="Add" icon={<Icon name="plus-circle-outline" />} />
        <BottomNavigationTab title="Goals" icon={<Icon name="edit-outline" />} />
        <BottomNavigationTab title="More" icon={<Icon name="grid-outline" />} />
      </BottomNavigation>
    </>
  );
};

const RootTabNavigator = (): React.ReactElement => {
  return (
    <Tab.Navigator
      id="RootTabNavigator"
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="HomeStackNavigator" component={HomeStackNavigator} />
      <Tab.Screen name="ProjectsStackNavigator" component={ProjectsStackNavigator} />
      <Tab.Screen name="AddDataStackNavigator" component={AddDataStackNavigator} />
      <Tab.Screen name="GoalsStackNavigator" component={GoalsStackNavigator} />
      <Tab.Screen name="MoreStackNavigator" component={MoreStackNavigator} />
    </Tab.Navigator>
  );
};

export default RootTabNavigator;
