import * as React from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AddDataStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';

type Props = NativeStackScreenProps<AddDataStackParamList, 'AddData'>

const AddDataScreen = ({ navigation }: Props): React.ReactElement => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Add Words" alignment="center" />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Add Words</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default AddDataScreen;
