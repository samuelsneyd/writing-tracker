import * as React from 'react';
import { Button, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/types';


type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const DetailsScreen = ({ navigation }: DetailsScreenProps) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
  </View>
);

export default DetailsScreen;
