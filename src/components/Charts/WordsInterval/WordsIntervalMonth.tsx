import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isWithinInterval,
  setDefaultOptions,
  startOfDay,
  startOfMonth,
  sub,
} from 'date-fns';
import { useAppSelector } from '../../../store/hooks';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import type { BarChartProps, BarDataItemType } from '../chart-types';
import { formatInterval, getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from '../chart-utils';

setDefaultOptions({ weekStartsOn: 1 });

export const WordsIntervalMonth = (props: BarChartProps): React.ReactElement => {
  const { showTitle = true, barChartContainerStyle = undefined } = props;
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const today = new Date();
  const [interval, setInterval] = React.useState<Interval>({
    start: startOfMonth(today),
    end: endOfMonth(today),
  });
  const allDatesInInterval = eachDayOfInterval(interval).map(date => date.toISOString());

  // Sum words of all projects, grouped by day of the week
  const barData = _(reduxSessions)
    .filter(session => isWithinInterval(new Date(session.date), interval))
    .map(session => ({
      value: session.words,
      day: startOfDay(new Date(session.date)).toISOString(),
    }))
    .groupBy('day')
    .mapValues(group => _.sumBy(group, 'value'))
    .defaults(_.zipObject(allDatesInInterval, Array(allDatesInInterval.length).fill(0)))
    .map((value, day): BarDataItemType => {
      const dayDate = new Date(day);
      const dayIndex = (getDay(dayDate) + 6) % 7;
      return ({
        day,
        dayIndex,
        value,
        // Only render label for Mondays
        labelComponent: () => {
          if (dayIndex === 0) {
            const label = format(dayDate, 'd');
            return renderLabel(label, 4);
          }
        },
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

  // Average per day during current interval
  const average = Math.round(_(barData).filter(data => data.value).meanBy('value')) || 0;

  const maxValue = getMaxYAxisValue(barData);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue);

  return (
    <>
      {showTitle && <Text category="h6">Words (month)</Text>}
      <ChartAggregateHeader
        aggregateText="daily average"
        value={average}
        valueText="words"
        intervalText={formatInterval(interval)}
        onBackButtonPress={() => setInterval({
          start: startOfMonth(sub(interval.start, { months: 1 })),
          end: endOfMonth(sub(interval.end, { months: 1 })),
        })}
        onForwardButtonPress={() => setInterval({
          start: startOfMonth(add(interval.start, { months: 1 })),
          end: endOfMonth(add(interval.end, { months: 1 })),
        })}
        forwardButtonDisabled={isWithinInterval(today, interval)}
      />
      <Layout style={barChartContainerStyle || styles.defaultBarChartContainer}>
        <BarChart
          data={barData}
          frontColor={theme['color-primary-500']}
          gradientColor={theme['color-primary-300']}
          showGradient
          barBorderRadius={2}
          hideRules
          barWidth={7}
          spacing={3}
          initialSpacing={3}
          maxValue={maxValue}
          noOfSections={4}
          renderTooltip={(item: BarDataItemType) =>
            renderTooltip(item, `${format(new Date(item.day), 'MMM d')}\n`)
          }
          leftShiftForTooltip={15}
          leftShiftForLastIndexTooltip={30}
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
