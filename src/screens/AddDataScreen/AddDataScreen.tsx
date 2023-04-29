import * as React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AddDataStackParamList } from '../../types/types';

type Props = NativeStackScreenProps<AddDataStackParamList, 'AddData'>

const AddDataScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add Data</Text>
    </View>
  );
};

export default AddDataScreen;
