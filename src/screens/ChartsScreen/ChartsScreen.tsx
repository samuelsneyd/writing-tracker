import * as React from 'react';
import { ColorValue, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useIsFocused } from '@react-navigation/native';
import { DataStore, Predicates } from 'aws-amplify';
import _ from 'lodash';
import { Session } from '../../models';
import type { MoreStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, TopNavigationAction, useTheme } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';
import { BarChart } from 'react-native-gifted-charts';

type BarDataItemType = {
  value?: number;
  onPress?: any;
  frontColor?: ColorValue;
  sideColor?: ColorValue;
  topColor?: ColorValue;
  showGradient?: Boolean;
  gradientColor?: any;
  label?: String;
  barWidth?: number;
  sideWidth?: number;
  labelTextStyle?: any;
  topLabelComponent?: Function;
  topLabelContainerStyle?: any;
  disablePress?: any;
  labelComponent?: View | Function;
  spacing?: number;
  barBackgroundPattern?: Function;
  patternId?: String;
  barStyle?: object;
};

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

type Props = NativeStackScreenProps<MoreStackParamList, 'Charts'>

const ChartsScreen = ({ navigation }: Props): React.ReactElement => {
  const [sessionData, setSessionData] = React.useState<BarDataItemType[]>([]);
  const focused = useIsFocused();
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
        .map((item): BarDataItemType => ({
          ...item,
          labelComponent: () => <Text style={styles.toolTip} appearance="hint">{item.label}</Text>,
        }))
        .value();

      setSessionData(sortedResult);
    };

    fetchSessions().then();
  }, [focused]);

  const backAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  const renderTooltip = (item: BarDataItemType) => (
    <Text appearance="hint" style={styles.barLabel}>{item.value?.toLocaleString()}</Text>
  );

  const getMaxYAxisValue = () => {
    const defaultMax = 1000;
    const step = 1000;
    const dataCeiling = Math.ceil(_.max(sessionData.map(d => (d.value ?? 0) / step)) || 0) * step;
    return dataCeiling || defaultMax;
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Charts" alignment="center" accessoryLeft={backAction} />
      <Divider />
      <ScrollView style={styles.container} contentContainerStyle={styles.container}>
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
            maxValue={getMaxYAxisValue()}
            noOfSections={4}
            renderTooltip={renderTooltip}
            leftShiftForTooltip={2}
            leftShiftForLastIndexTooltip={2}
            yAxisLabelWidth={55}
            yAxisTextStyle={{ color: theme['text-hint-color'] }}
            yAxisColor={theme['text-hint-color']}
            xAxisColor={theme['text-hint-color']}
            disableScroll
          />
        </Layout>
      </ScrollView>
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
  barLabel: {
    textAlign: 'center',
  },
});

export default ChartsScreen;
