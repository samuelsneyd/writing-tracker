import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { eachDayOfInterval, format, min, startOfDay } from 'date-fns';
import { useAppSelector } from '../../store/hooks';
import { BarDataItemType } from './chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

const DAYS_OF_WEEK = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const WordsWrittenMonth = (): React.ReactElement => {
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const datesArray = reduxSessions.map(session => new Date(session.date));
  const interval = {
    start: min(datesArray),
    end: new Date(),
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
      // 0: Mon, 6: Sun
      const dayIndex = (new Date(day).getDay() + 6) % 7;
      const label = DAYS_OF_WEEK[dayIndex];
      return ({
        day,
        dayIndex,
        value,
        label,
        // Only render label for Mondays
        labelComponent: () => dayIndex === 0 ? renderLabel(label) : undefined,
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

  const maxValue = getMaxYAxisValue(barData);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue);

  return (
    <>
      <Text category="h6" appearance="hint">Words written by day (month)</Text>
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
        renderTooltip={(item: BarDataItemType) => renderTooltip(item, `${format(new Date(item.day), 'MMM d')}\n`)}
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

export default WordsWrittenMonth;
