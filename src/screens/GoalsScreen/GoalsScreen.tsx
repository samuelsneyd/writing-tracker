import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import DailyGoalTabs from '../../components/DailyGoalTabs/DailyGoalTabs';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';
import type { GoalsStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, TopNavigationAction } from '@ui-kitten/components';

type Props = NativeStackScreenProps<GoalsStackParamList, 'Goals'>

const GoalsScreen = ({ navigation }: Props): React.ReactElement => {
  const backAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Goals" alignment="center" accessoryLeft={backAction} />
      <Divider />
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Layout style={styles.body}>
          <Text category="h5">Daily Goals</Text>
          <DailyGoalTabs />
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

export default GoalsScreen;
