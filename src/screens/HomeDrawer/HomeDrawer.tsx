import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Divider, Drawer, DrawerElement, DrawerItem, IndexPath, Layout, Text } from '@ui-kitten/components';
import { Auth } from 'aws-amplify';
import { name as appName } from '../../../app.json';
import { HomeIcon, LogOutIcon, PersonIcon, SettingsIcon } from '../../components/Icons/Icons';
import { SafeAreaLayout } from '../../components/SafeAreaComponent/SafeAreaComponent';
import { HomeDrawerParamList } from '../../types/types';

// TODO - fetch version from app metadata
const version: string = '1.0.0';

type Props = DrawerScreenProps<HomeDrawerParamList, 'RootTabNavigator'>;

export const HomeDrawer = ({ navigation }: Props): DrawerElement => {
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>();

  // TODO - add onPress handlers
  const DATA = [
    {
      title: 'Home',
      icon: HomeIcon,
      onPress: () => {
        console.log('Home');
        navigation.navigate('RootTabNavigator');
        navigation.closeDrawer();
      },
    },
    {
      title: 'Profile',
      icon: PersonIcon,
      onPress: () => {
        console.log('Profile');
        navigation.closeDrawer();
      },
    },
    {
      title: 'Settings',
      icon: SettingsIcon,
      onPress: () => {
        console.log('Settings');
        navigation.closeDrawer();
      },
    },
    {
      title: 'Log Out',
      icon: LogOutIcon,
      onPress: async () => {
        try {
          await Auth.signOut();
        } catch (error) {
          console.log('error signing out: ', error);
        }
      },
    },
  ];

  const renderHeader = (): React.ReactElement => (
    <SafeAreaLayout insets="top" level="2">
      <Layout style={styles.header} level="2">
        <View style={styles.profileContainer}>
          {/* TODO - add app icon */}
          {/*<Avatar*/}
          {/*  size="giant"*/}
          {/*  source={{ uri: '' }}*/}
          {/*/>*/}
          <Text style={styles.profileName} category="h6">
            {appName}
          </Text>
        </View>
      </Layout>
    </SafeAreaLayout>
  );

  const renderFooter = () => (
    <SafeAreaLayout insets="bottom">
      <React.Fragment>
        <Divider />
        <View style={styles.footer}>
          <Text category="s2">{`Version ${version}`}</Text>
        </View>
      </React.Fragment>
    </SafeAreaLayout>
  );

  return (
    <Drawer
      header={renderHeader}
      footer={renderFooter}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      {DATA.map((el, index) => (
        <DrawerItem
          key={index}
          title={el.title}
          onPress={el.onPress}
          accessoryLeft={el.icon}
        />
      ))}
    </Drawer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 16,
    marginVertical: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
