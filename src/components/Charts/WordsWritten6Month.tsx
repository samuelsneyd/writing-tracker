import * as React from 'react';
import _ from 'lodash';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import {
  eachWeekOfInterval,
  endOfWeek,
  format,
  getWeekOfMonth,
  lastDayOfWeek,
  min,
  setDefaultOptions,
  startOfWeek,
  sub,
} from 'date-fns';
import { useAppSelector } from '../../store/hooks';
import { BarDataItemType } from './chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

setDefaultOptions({ weekStartsOn: 1 });

export const WordsWritten6Month = (): React.ReactElement => {
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const datesArray = reduxSessions.map(session => new Date(session.date));
  const interval = {
    start: min([...datesArray, sub(new Date(), { months: 6 })]),
    end: new Date(),
  };
  const allWeeksInInterval = eachWeekOfInterval(interval).map(date => date.toISOString());

  // First label always shown
  let showLabel = true;

  // Sum words of all projects, grouped by week
  const barData = _(reduxSessions)
    .map(session => ({
      value: session.words,
      week: startOfWeek(new Date(session.date)).toISOString(),
    }))
    .groupBy('week')
    .mapValues(group => _.sumBy(group, 'value'))
    .defaults(_.zipObject(allWeeksInInterval, Array(allWeeksInInterval.length).fill(0)))
    .map((value, week): BarDataItemType => {
      return ({
        week,
        value,
        labelComponent: () => {
          // Show label if the week contains the first of the month
          let label;
          const start = new Date(week);
          const end = endOfWeek(start);

          if (showLabel) {
            // First label shown by default
            label = format(start, 'MMM');
          } else if (getWeekOfMonth(start) === 1) {
            showLabel = true;
            label = format(start, 'MMM');
          } else if (getWeekOfMonth(end) === 1) {
            showLabel = true;
            label = format(end, 'MMM');
          }

          if (showLabel) {
            showLabel = false;
            return renderLabel(label, 3);
          }
        },
      });
    })
    // Sort chronologically
    .sortBy('week')
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

  const maxValue = getMaxYAxisValue(barData);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue);

  return (
    <>
      <Text category="h6" appearance="hint">Words written (6 months)</Text>
      <BarChart
        data={barData}
        frontColor={theme['color-primary-500']}
        gradientColor={theme['color-primary-300']}
        showGradient
        barBorderRadius={2}
        hideRules
        barWidth={8}
        spacing={4}
        initialSpacing={8}
        maxValue={maxValue}
        noOfSections={4}
        renderTooltip={(item: BarDataItemType) => {
          const start = format(new Date(item.week), 'd');
          const end = format(lastDayOfWeek(new Date(item.week)), 'd MMM');
          return renderTooltip(item, `${start} -\n${end}\n`);
        }}
        leftShiftForTooltip={20}
        leftShiftForLastIndexTooltip={30}
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
