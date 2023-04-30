import * as React from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../../types/types';
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import DailyQuote from '../../components/DailyQuote/DailyQuote';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>

const HomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Home" alignment="center" />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Home</Text>
        <DailyQuote />
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
