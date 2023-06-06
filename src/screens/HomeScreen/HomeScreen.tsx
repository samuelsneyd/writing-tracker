import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../../types/types';
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionElement,
} from '@ui-kitten/components';
import DailyQuote from '../../components/DailyQuote/DailyQuote';
import LoginStreak from '../../components/LoginStreak/LoginStreak';
import { MenuIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>

const HomeScreen = ({ navigation }: Props): React.ReactElement => {
  const isFocused = useIsFocused();

  const renderDrawerAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => {
      }}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Home" alignment="center" accessoryLeft={renderDrawerAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text category="h1">Home</Text>
        <DailyQuote isFocused={isFocused} />
        <LoginStreak isFocused={isFocused} />
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
