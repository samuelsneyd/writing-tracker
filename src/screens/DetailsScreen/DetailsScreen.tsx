import { Button, Text, View } from 'react-native';
import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const DetailsScreen = ({ navigation }: DetailsScreenProps) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
  </View>
);

export default DetailsScreen;
