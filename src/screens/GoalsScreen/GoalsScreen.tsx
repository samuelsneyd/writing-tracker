import * as React from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';
import type { GoalsStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, TopNavigationAction } from '@ui-kitten/components';

type Props = NativeStackScreenProps<GoalsStackParamList, 'Goals'>

const GoalsScreen = ({ navigation }: Props): React.ReactElement => {
  const backAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Goals" alignment="center" accessoryLeft={backAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Goals</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default GoalsScreen;
