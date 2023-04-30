import * as React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GoalsStackParamList } from '../../types/types';

type Props = NativeStackScreenProps<GoalsStackParamList, 'Goals'>

const GoalsScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Goals</Text>
    </View>
  );
};

export default GoalsScreen;
