import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DataStore, Predicates } from 'aws-amplify';
import _ from 'lodash';
import { Session } from '../../models';
import type { MoreStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, TopNavigationAction, useTheme } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';
import { BarChart } from 'react-native-gifted-charts';

type BarData = {
  value: number;
  label: string;
};

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

type Props = NativeStackScreenProps<MoreStackParamList, 'Charts'>

const ChartsScreen = ({ navigation }: Props): React.ReactElement => {
  const [sessionData, setSessionData] = React.useState<BarData[]>([]);
  const theme = useTheme();

  React.useEffect(() => {
    const fetchSessions = async () => {
      const foundSessions = await DataStore.query(Session, Predicates.ALL);

      // Total words written across all sessions, grouped by day of the week
      const sortedResult = _(foundSessions)
        .map(session => ({
          value: session.words,
          label: DAYS_OF_WEEK[(new Date(session.date).getDay() + 6) % 7], // 0: Mon, 6: Sun
        }))
        .groupBy('label')
        .mapValues(group => _.sumBy(group, 'value'))
        .defaults(_.zipObject(DAYS_OF_WEEK, Array(DAYS_OF_WEEK.length).fill(0)))
        .map((value, label) => ({ value, label }))
        .sortBy([item => _.indexOf(DAYS_OF_WEEK, item.label)])
        // .map(item => ({ ...item })) // Optional, add props for each bar separately
        .value();

      setSessionData(sortedResult);
    };

    fetchSessions().then();
  }, []);

  const backAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Charts" alignment="center" accessoryLeft={backAction} />
      <Divider />
      <Layout style={styles.body}>
        <Text category="h1">Charts</Text>
        <Text appearance="hint">Total words written by day</Text>
        <BarChart
          data={sessionData}
          frontColor={theme['color-primary-500']}
          gradientColor={theme['color-primary-300']}
          showGradient
          barBorderRadius={4}
          isAnimated
          hideRules
          spacing={15}
          initialSpacing={20}
          maxValue={(Math.ceil(_.max(sessionData.map(d => d.value / 1000)) || 0) * 1000) || 1000}
          noOfSections={4}
          renderTooltip={(item: BarData) => <Text appearance="hint" style={styles.toolTip}>{item.value}</Text>}
          leftShiftForTooltip={2}
          leftShiftForLastIndexTooltip={2}
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
  toolTip: {
    textAlign: 'center',
  },
});

export default ChartsScreen;
