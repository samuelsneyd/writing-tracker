import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GoalsStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';

type Props = NativeStackScreenProps<GoalsStackParamList, 'Goals'>

const GoalsScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Home" alignment="center" />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Goals</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default GoalsScreen;
