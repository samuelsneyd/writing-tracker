import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import {
  add,
  eachDayOfInterval,
  endOfDay,
  format,
  getDay,
  isWithinInterval,
  minutesToHours,
  setDefaultOptions,
  startOfDay,
  sub,
} from 'date-fns';
import { useAppSelector } from '../../../store/hooks';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import { BarDataItemType } from '../chart-types';
import {
  formatInterval,
  formatMinutesAsHourMinutes,
  getMaxYAxisValue,
  getYAxisLabelTexts,
  renderLabel,
  renderTooltip,
} from '../chart-utils';

setDefaultOptions({ weekStartsOn: 1 });

type Props = {
  showTitle?: boolean;
  barChartContainerStyle?: StyleProp<ViewStyle>;
};

// TODO - refactor to show hours 0-23 as bars instead of days
export const TimeIntervalDay = (props: Props): React.ReactElement => {
  const { showTitle = true, barChartContainerStyle = undefined } = props;
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const today = new Date();
  const [interval, setInterval] = React.useState<Interval>({
    start: startOfDay(today),
    end: endOfDay(today),
  });
  const allDatesInInterval = eachDayOfInterval(interval).map(date => date.toISOString());

  // Sum words of all projects, grouped by day of the week
  const barData = _(reduxSessions)
    .filter(session => isWithinInterval(new Date(session.date), interval))
    .map(session => ({
      value: session.minutes,
      day: startOfDay(new Date(session.date)).toISOString(),
    }))
    .groupBy('day')
    .mapValues(group => _.sumBy(group, 'value'))
    .defaults(_.zipObject(allDatesInInterval, Array(allDatesInInterval.length).fill(0)))
    .map((value, day): BarDataItemType => {
      const dayDate = new Date(day);
      const dayIndex = (getDay(dayDate) + 6) % 7;
      const label = format(dayDate, 'E');
      return ({
        day,
        dayIndex,
        value,
        labelComponent: () => renderLabel(label),
      });
    })
    // Sort chronologically
    .sortBy('day')
    .map((item): BarDataItemType => (
      theme.useRainbow
        ? {
          ...item,
          frontColor: theme[`color-rainbow-${item.dayIndex % Number.parseInt(theme.rainbowLength)}-500`],
          gradientColor: theme[`color-rainbow-${item.dayIndex % Number.parseInt(theme.rainbowLength)}-300`],
          showGradient: true,
        }
        : item
    ))
    .value();

  // Sum minutes during current interval
  const total = Math.round(_(barData).filter(data => data.value).sumBy('value')) || 0;

  const maxValue = getMaxYAxisValue(barData, 2 * 60, 2 * 60);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue, 4, '', 'h', 1 / 60);
  const formattedTime = formatMinutesAsHourMinutes(total);

  return (
    <>
      {showTitle && <Text category="h6">Time (day)</Text>}
      <ChartAggregateHeader
        aggregateText="total"
        value={formattedTime}
        valueText=""
        intervalText={formatInterval(interval)}
        onBackButtonPress={() => {
          setInterval({
            start: sub(interval.start, { days: 1 }),
            end: sub(interval.end, { days: 1 }),
          });
        }}
        onForwardButtonPress={() => {
          setInterval({
            start: add(interval.start, { days: 1 }),
            end: add(interval.end, { days: 1 }),
          });
        }}
        forwardButtonDisabled={isWithinInterval(today, interval)}
      />
      <Layout style={barChartContainerStyle || styles.defaultBarChartContainer}>
        <BarChart
          data={barData}
          frontColor={theme['color-primary-500']}
          gradientColor={theme['color-primary-300']}
          showGradient
          barBorderRadius={4}
          hideRules
          spacing={15}
          initialSpacing={20}
          maxValue={maxValue}
          noOfSections={4}
          renderTooltip={(item: BarDataItemType) =>
            renderTooltip(item, `${format(new Date(item.day), 'MMM d')}\n`)
          }
          leftShiftForTooltip={7}
          leftShiftForLastIndexTooltip={3}
          yAxisLabelWidth={50}
          yAxisLabelTexts={yAxisLabelTexts}
          yAxisTextStyle={{ color: theme['text-hint-color'] }}
          yAxisColor={theme['text-hint-color']}
          xAxisColor={theme['text-hint-color']}
          disableScroll
        />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  defaultBarChartContainer: {
    width: '100%',
  },
});
