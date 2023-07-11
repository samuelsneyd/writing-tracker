import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeDrawer } from '../../screens/HomeDrawer/HomeDrawer';
import { HomeDrawerParamList } from '../../types/types';
import RootTabNavigator from '../RootTabNavigator/RootTabNavigator';
import ProfileStackNavigator from '../ProfileStackNavigator/ProfileStackNavigator';
import SettingsStackNavigator from '../SettingsStackNavigator/SettingsStackNavigator';

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

const DrawerNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    screenOptions={{ headerShown: false, swipeEdgeWidth: 0 }}
    // @ts-ignore
    drawerContent={props => <HomeDrawer {...props} />}
  >
    <Drawer.Screen name="RootTabNavigator" component={RootTabNavigator} />
    <Drawer.Screen name="ProfileStackNavigator" component={ProfileStackNavigator} />
    <Drawer.Screen name="SettingsStackNavigator" component={SettingsStackNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
