import * as React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BrowseStackParamList } from '../../types/types';

type Props = NativeStackScreenProps<BrowseStackParamList, 'Browse'>

const BrowseScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Browse</Text>
    </View>
  );
};

export default BrowseScreen;
