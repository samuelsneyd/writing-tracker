import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MoreStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import useBackNavigation from '../../hooks/useBackNavigation/useBackNavigation';

type Props = NativeStackScreenProps<MoreStackParamList, 'Themes'>

const ThemesScreen = ({ navigation }: Props) => {
  const { BackAction } = useBackNavigation(navigation);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Themes" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Themes</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default ThemesScreen;
