import * as React from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import _ from 'lodash';
import { Session } from '../../models';
import {
  Text,
  useTheme,
  TextElement,
} from '@ui-kitten/components';
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

type Props = {
  sessions: Session[],
};

const TotalWordsByDayChart = ({ sessions }: Props): React.ReactElement => {
  const [sessionData, setSessionData] = React.useState<BarDataItemType[]>([]);
  const focused = useIsFocused();
  const theme = useTheme();

  React.useEffect(() => {
    // Total words written across all sessions, grouped by day of the week
    const sortedResult = _(sessions)
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
  }, [focused, sessions]);

  const renderTooltip = (item: BarDataItemType): TextElement => (
    <Text appearance="hint" style={styles.barLabel}>{item.value?.toLocaleString()}</Text>
  );

  const getMaxYAxisValue = (): number => {
    const defaultMax = 1000;
    const step = 1000;
    const dataCeiling = Math.ceil(_.max(sessionData.map(d => (d.value ?? 0) / step)) || 0) * step;
    return dataCeiling || defaultMax;
  };

  const getYAxisLabels = (): string[] => {
    const maxYAxisValue = getMaxYAxisValue();
    const kLimit = 10000;
    return [
      0,
      maxYAxisValue / 4,
      maxYAxisValue / 2,
      (maxYAxisValue / 4) * 3,
      maxYAxisValue,
    ].map(n => {
      if (n === 0 || maxYAxisValue < kLimit) {
        return n.toLocaleString();
      }
      return `${n / 1000}K`;
    });
  };

  return (
    <>
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
        yAxisLabelTexts={getYAxisLabels()}
        yAxisTextStyle={{ color: theme['text-hint-color'] }}
        yAxisColor={theme['text-hint-color']}
        xAxisColor={theme['text-hint-color']}
        disableScroll
      />
    </>
  );
};

const styles = StyleSheet.create({
  toolTip: {
    textAlign: 'center',
  },
  barLabel: {
    textAlign: 'center',
  },
});

export default TotalWordsByDayChart;
