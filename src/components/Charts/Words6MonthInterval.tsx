import * as React from 'react';
import _ from 'lodash';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import {
  add,
  eachWeekOfInterval, endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  getMonth,
  getWeekOfMonth,
  isWithinInterval,
  lastDayOfWeek,
  setDefaultOptions,
  startOfMonth,
  startOfWeek,
  startOfYear,
  sub,
} from 'date-fns';
import { useAppSelector } from '../../store/hooks';
import ChartAggregateHeader from '../ChartAggregateHeader/ChartAggregateHeader';
import { BarDataItemType } from './chart-types';
import { formatInterval, getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

setDefaultOptions({ weekStartsOn: 1 });

export const Words6MonthInterval = (): React.ReactElement => {
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const today = new Date();
  const startOfThisYear = startOfYear(today);
  const endOfThisYear = endOfYear(today);

  const firstInterval = {
    start: startOfThisYear,
    end: endOfMonth(add(startOfThisYear, { months: 5 })),
  };
  const secondInterval = {
    start: add(startOfThisYear, { months: 6 }),
    end: endOfThisYear,
  };
  const initialInterval = getMonth(today) < 6 ? firstInterval : secondInterval;
  const [interval, setInterval] = React.useState<Interval>(initialInterval);
  const allWeeksInInterval = eachWeekOfInterval(interval).map(date => date.toISOString());

  let showLabel = false;

  // Sum words of all projects, grouped by week
  const barData = _(reduxSessions)
    .filter(session => isWithinInterval(new Date(session.date), interval))
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

          if (getWeekOfMonth(start) === 1) {
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

  // Average per week during current interval
  const average = Math.round(_(barData).filter(data => data.value).meanBy('value')) || 0;

  const maxValue = getMaxYAxisValue(barData);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue);

  return (
    <>
      <Text category="h6">Words (6 months)</Text>
      <ChartAggregateHeader
        aggregateText="weekly average"
        value={average}
        valueText="words"
        intervalText={formatInterval(interval)}
        onBackButtonPress={() => setInterval({
          start: startOfMonth(sub(interval.start, { months: 6 })),
          end: endOfMonth(sub(interval.end, { months: 6 })),
        })}
        onForwardButtonPress={() => setInterval({
          start: startOfMonth(add(interval.start, { months: 6 })),
          end: endOfMonth(add(interval.end, { months: 6 })),
        })}
        forwardButtonDisabled={isWithinInterval(today, interval)}
      />
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
