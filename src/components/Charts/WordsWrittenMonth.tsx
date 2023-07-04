import * as React from 'react';
import _ from 'lodash';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { eachDayOfInterval, format, getDay, isWithinInterval, min, setDefaultOptions, startOfDay, sub } from 'date-fns';
import { useAppSelector } from '../../store/hooks';
import { BarDataItemType } from './chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

setDefaultOptions({ weekStartsOn: 1 });

export const WordsWrittenMonth = (): React.ReactElement => {
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const datesArray = reduxSessions.map(session => new Date(session.date));
  const today = new Date();
  const interval = {
    start: min(datesArray),
    end: today,
  };
  const allDatesInInterval = eachDayOfInterval(interval).map(date => date.toISOString());

  // Sum words of all projects, grouped by day of the week
  const barData = _(reduxSessions)
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
            const label = format(dayDate, 'dd MMM');
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

  const dailyAverage30Days = Math.round(
    _(barData)
      .filter(data => data.value && isWithinInterval(new Date(data.day), {
        start: sub(startOfDay(today), { days: 30 }),
        end: today,
      }))
      .meanBy('value'),
  );


  const maxValue = getMaxYAxisValue(barData);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue);

  return (
    <>
      <Text category="h6" appearance="hint">Words (month)</Text>
      <Text category="s1" appearance="hint">30-day average: {dailyAverage30Days.toLocaleString()} words</Text>
      <BarChart
        data={barData}
        frontColor={theme['color-primary-500']}
        gradientColor={theme['color-primary-300']}
        showGradient
        barBorderRadius={2}
        hideRules
        barWidth={8}
        spacing={3}
        initialSpacing={8}
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
        scrollToEnd
      />
    </>
  );
};
