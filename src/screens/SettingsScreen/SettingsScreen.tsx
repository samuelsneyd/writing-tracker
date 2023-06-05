import * as React from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { SettingsStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, TopNavigationAction } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<SettingsStackParamList, 'Settings'>

const SettingsScreen = ({ navigation }: Props): React.ReactElement => {
  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Settings" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Settings</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default SettingsScreen;
