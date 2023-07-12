import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TabIndicator } from '@ui-kitten/components/ui/shared/tabIndicator.component';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Divider } from '@ui-kitten/components';
import type { RootTabParamList } from '../../types/types';
import ChartsStackNavigator from '../ChartsStackNavigator/ChartsStackNavigator';
import HomeStackNavigator from '../HomeStackNavigator/HomeStackNavigator';
import ProjectsStackNavigator from '../ProjectsStackNavigator/ProjectsStackNavigator';
import MoreStackNavigator from '../MoreStackNavigator/MoreStackNavigator';
import { BarChartIcon, BookIcon, GridIcon, HomeIcon } from '../../components/Icons/Icons';

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabBar = ({ navigation, state }: BottomTabBarProps): React.ReactElement => (
  <>
    <Divider />
    <TabIndicator></TabIndicator>
    <BottomNavigation
      appearance="default"
      indicatorStyle={styles.indicator}
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title="Home" icon={HomeIcon} />
      <BottomNavigationTab title="Projects" icon={BookIcon} />
      <BottomNavigationTab title="Charts" icon={BarChartIcon} />
      <BottomNavigationTab title="More" icon={GridIcon} />
    </BottomNavigation>
  </>
);

const RootTabNavigator = (): React.ReactElement => (
  <Tab.Navigator
    id="RootTabNavigator"
    tabBar={props => <BottomTabBar {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen name="HomeStackNavigator" component={HomeStackNavigator} options={{ lazy: false }} />
    <Tab.Screen name="ProjectsStackNavigator" component={ProjectsStackNavigator} options={{ lazy: false }} />
    <Tab.Screen name="ChartsStackNavigator" component={ChartsStackNavigator} options={{ lazy: false }} />
    <Tab.Screen name="MoreStackNavigator" component={MoreStackNavigator} options={{ lazy: false }} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  indicator: {
    // Negative margin removes light indicator background on dark theme
    margin: -4,
    height: 4,
  },
});

export default RootTabNavigator;
