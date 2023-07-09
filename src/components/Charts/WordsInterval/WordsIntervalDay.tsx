import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import {
  add,
  eachDayOfInterval,
  endOfDay,
  format,
  getDay,
  isWithinInterval,
  setDefaultOptions,
  startOfDay,
  sub,
} from 'date-fns';
import useDailyTasks from '../../../hooks/useDailyTasks/useDailyTasks';
import { useAppSelector } from '../../../store/hooks';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import { defaultChartStyles } from '../chart-styles';
import type { ChartProps, BarDataItemType } from '../chart-types';
import {
  formatInterval,
  getMaxYAxisValue,
  getSteppedColors,
  getYAxisLabelTexts,
  renderLabel,
  renderTooltip,
} from '../chart-utils';

setDefaultOptions({ weekStartsOn: 1 });

export const WordsIntervalDay = (props: ChartProps): React.ReactElement => {
  const { showTitle = true, chartContainerStyle = defaultChartStyles.chartContainer } = props;
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const today = new Date();
  const [interval, setInterval] = React.useState<Interval>({
    start: startOfDay(today),
    end: endOfDay(today),
  });
  const allDatesInInterval = eachDayOfInterval(interval).map(date => date.toISOString());
  const { allTasks } = useDailyTasks(interval.start as Date);
  const dailyGoal = _.sumBy(allTasks, 'wordsToDo');

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
      const label = 'Actual';
      return ({
        day,
        dayIndex,
        value,
        label,
        labelComponent: () => renderLabel(label),
      });
    })
    // Sort chronologically
    .sortBy('day')
    .map((item): BarDataItemType => ({
      ...item,
      ...getSteppedColors(item, theme, dailyGoal),
    }))
    // Add the daily target
    .push({
      value: dailyGoal,
      label: 'Target',
      labelComponent: () => renderLabel('Target'),
      day: interval.start,
      frontColor: theme['color-success-500'],
      gradientColor: theme['color-success-300'],
      showGradient: true,
    })
    .value();

  // Average per day during current interval
  const total = Math.round(_(barData).filter(data => data.value && data.label === 'Actual').sumBy('value')) || 0;

  // Custom logic for max value to display smaller daily targets < 1000 words as larger bars
  const maxValue = dailyGoal < 1000
    ? getMaxYAxisValue(barData, 100, 100)
    : getMaxYAxisValue(barData);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue);

  return (
    <>
      {showTitle && <Text category="h6">Words (day)</Text>}
      <ChartAggregateHeader
        aggregateText="total"
        value={total}
        valueText="words"
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
      <Layout style={chartContainerStyle}>
        <BarChart
          data={barData}
          frontColor={theme['color-primary-500']}
          gradientColor={theme['color-primary-300']}
          showGradient
          barBorderRadius={4}
          barWidth={120}
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
