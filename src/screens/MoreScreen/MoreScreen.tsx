import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { MoreStackParamList } from '../../types/types';
import { Divider, TopNavigation } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/SafeAreaComponent/SafeAreaComponent';
import { MenuGridList } from '../../components/MenuGridList/MenuGridList';
import { data } from './data';

type Props = NativeStackScreenProps<MoreStackParamList, 'More'>

const MoreScreen = ({ navigation }: Props): React.ReactElement => {
  const onItemPress = (index: number): void => {
    // Parent allows navigation to a different tab from inside nested stack
    navigation.getParent()!.navigate(data[index].route);
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

export default MoreScreen;
