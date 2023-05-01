import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BrowseStackParamList } from '../../types/types';
import { Divider, TopNavigation } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/SafeAreaComponent/SafeAreaComponent';
import { MenuGridList } from '../../components/MenuGridList/MenuGridList';
import { data } from './data';

type Props = NativeStackScreenProps<BrowseStackParamList, 'Browse'>

const BrowseScreen = ({ navigation }: Props) => {

  const onItemPress = (index: number): void => {
    // TODO - set up routes
    // navigation.navigate(data[index].route);
    navigation.navigate('Browse');
  };

  return (
    <SafeAreaLayout style={styles.safeArea} insets="top">
      <TopNavigation title="More" alignment="center" />
      <Divider />
      <MenuGridList data={data} onItemPress={onItemPress} />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default BrowseScreen;
