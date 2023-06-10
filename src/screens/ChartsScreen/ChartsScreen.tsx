import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { MoreStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, TopNavigationAction, useTheme } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';
import { BarChart } from 'react-native-gifted-charts';

type Props = NativeStackScreenProps<MoreStackParamList, 'Charts'>

const ChartsScreen = ({ navigation }: Props): React.ReactElement => {
  const theme = useTheme();
  const barData = [
    { value: 450, label: 'Mon' },
    { value: 300, label: 'Tue' },
    { value: 260, label: 'Wed' },
    { value: 400, label: 'Thu' },
    { value: 250, label: 'Fri' },
    { value: 650, label: 'Sat' },
    { value: 440, label: 'Sun' },
    { value: 450, label: 'Mon' },
    { value: 300, label: 'Tue' },
    { value: 260, label: 'Wed' },
    { value: 400, label: 'Thu' },
    { value: 250, label: 'Fri' },
    { value: 650, label: 'Sat' },
    { value: 440, label: 'Sun' },
    { value: 450, label: 'Mon' },
    { value: 300, label: 'Tue' },
    { value: 260, label: 'Wed' },
    { value: 400, label: 'Thu' },
    { value: 250, label: 'Fri' },
    { value: 650, label: 'Sat' },
    { value: 440, label: 'Sun' },
    { value: 450, label: 'Mon' },
    { value: 300, label: 'Tue' },
    { value: 260, label: 'Wed' },
    { value: 400, label: 'Thu' },
    { value: 250, label: 'Fri' },
    { value: 1000, label: 'Sat' },
    { value: 440, label: 'Sun' },
  ];

  const backAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Charts" alignment="center" accessoryLeft={backAction} />
      <Divider />
      <Layout style={styles.body}>
        <Text category="h1">Charts</Text>
        <BarChart
          data={barData}
          frontColor={theme['color-primary-500']}
          barBorderRadius={4}
          isAnimated
          hideRules
          width={340}
          spacing={15}
          initialSpacing={20}
          // hideYAxisText
          // hideAxesAndRules
        />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    gap: 10,
  },
});

export default ChartsScreen;
