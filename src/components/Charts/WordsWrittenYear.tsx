import * as React from 'react';
import _ from 'lodash';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import {
  eachMonthOfInterval,
  format,
  isWithinInterval,
  min,
  setDefaultOptions,
  startOfDay,
  startOfMonth,
  sub,
} from 'date-fns';
import { useAppSelector } from '../../store/hooks';
import { BarDataItemType } from './chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

setDefaultOptions({ weekStartsOn: 1 });

export const WordsWrittenYear = (): React.ReactElement => {
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const datesArray = reduxSessions.map(session => new Date(session.date));
  const today = new Date();
  const interval = {
    start: min([...datesArray, sub(today, { years: 1 })]),
    end: today,
  };
  const allMonthsInInterval = eachMonthOfInterval(interval).map(date => date.toISOString());

  // Sum words of all projects, grouped by month
  const barData = _(reduxSessions)
    .map(session => ({
      value: session.words,
      month: startOfMonth(new Date(session.date)).toISOString(),
    }))
    .groupBy('month')
    .mapValues(group => _.sumBy(group, 'value'))
    .defaults(_.zipObject(allMonthsInInterval, Array(allMonthsInInterval.length).fill(0)))
    .map((value, month): BarDataItemType => {
      return ({
        month,
        value,
        labelComponent: () => {
          return renderLabel(format(new Date(month), 'MMM')[0], 2);
        },
      });
    })
    // Sort chronologically
    .sortBy('month')
    .map((item, i): BarDataItemType => (
      theme.useRainbow
        ? {
          ...item,
          frontColor: theme[`color-rainbow-${i % Number.parseInt(theme.rainbowLength)}-500`],
          gradientColor: theme[`color-rainbow-${i % Number.parseInt(theme.rainbowLength)}-300`],
          showGradient: true,
        }
        : item
    ))
    .value();

  const monthlyAverage1Year = Math.round(
    _(barData)
      .filter(data => data.value && isWithinInterval(new Date(data.month), {
        start: sub(startOfDay(today), { years: 1 }),
        end: today,
      }))
      .meanBy('value'),
  );

  const maxValue = getMaxYAxisValue(barData);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue);

  return (
    <>
      <Text category="h6" appearance="hint">Words written (year)</Text>
      <Text category="s1" appearance="hint">Monthly average: {monthlyAverage1Year.toLocaleString()} words</Text>
      <BarChart
        data={barData}
        frontColor={theme['color-primary-500']}
        gradientColor={theme['color-primary-300']}
        showGradient
        barBorderRadius={3}
        hideRules
        barWidth={20}
        spacing={6}
        initialSpacing={8}
        maxValue={maxValue}
        noOfSections={4}
        renderTooltip={(item: BarDataItemType) => renderTooltip(item, `${format(new Date(item.month), 'MMM')}\n`)}
        leftShiftForTooltip={12}
        leftShiftForLastIndexTooltip={22}
        yAxisLabelWidth={50}
        yAxisLabelTexts={yAxisLabelTexts}
        yAxisTextStyle={{ color: theme['text-hint-color'] }}
        yAxisColor={theme['text-hint-color']}
        xAxisColor={theme['text-hint-color']}
        scrollToEnd
      />
    </>
  );
};
