import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { SettingsStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, TopNavigationAction } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<SettingsStackParamList, 'Settings'>;

const SettingsScreen = ({ navigation }: Props): React.ReactElement => {
  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Settings" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Layout style={styles.body}>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
});

export default SettingsScreen;
