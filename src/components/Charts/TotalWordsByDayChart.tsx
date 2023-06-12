import * as React from 'react';
import _ from 'lodash';
import { EagerSession } from '../../models';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { BarDataItemType } from './chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

type Props = {
  eagerSessions: EagerSession[];
};

const TotalWordsByDayChart = ({ eagerSessions }: Props): React.ReactElement => {
  const theme = useTheme();
  // Sum words of all projects, grouped by day of the week
  const barData = _(eagerSessions)
    .map(session => ({
      value: session.words,
      label: DAYS_OF_WEEK[(new Date(session.date).getDay() + 6) % 7], // 0: Mon, 6: Sun
    }))
    .groupBy('label')
    .mapValues(group => _.sumBy(group, 'value'))
    .defaults(_.zipObject(DAYS_OF_WEEK, Array(DAYS_OF_WEEK.length).fill(0)))
    .map((value, label): BarDataItemType => ({
      value,
      label,
      labelComponent: () => renderLabel(label),
    }))
    // Sort Mon -> Sun
    .sortBy(item => _.indexOf(DAYS_OF_WEEK, item.label))
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
      <Text category="h6" appearance="hint">Total words by day</Text>
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
        renderTooltip={renderTooltip}
        leftShiftForTooltip={3}
        leftShiftForLastIndexTooltip={3}
        yAxisLabelWidth={50}
        yAxisLabelTexts={yAxisLabelTexts}
        yAxisTextStyle={{ color: theme['text-hint-color'] }}
        yAxisColor={theme['text-hint-color']}
        xAxisColor={theme['text-hint-color']}
        disableScroll
      />
    </>
  );
};

export default TotalWordsByDayChart;
