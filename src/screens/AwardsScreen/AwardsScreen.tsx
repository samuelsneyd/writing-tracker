import * as React from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { MoreStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import useBackNavigation from '../../hooks/useBackNavigation/useBackNavigation';

type Props = NativeStackScreenProps<MoreStackParamList, 'Awards'>

const AwardsScreen = ({ navigation }: Props) => {
  const { BackAction } = useBackNavigation(navigation);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Awards" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Awards</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default AwardsScreen;
