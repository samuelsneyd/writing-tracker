import * as React from 'react';
import _ from 'lodash';
import { Session } from '../../models';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { BarDataItemType } from './chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

type Props = {
  sessions: Session[];
};

const TotalWordsByDayChart = ({ sessions }: Props): React.ReactElement => {
  const theme = useTheme();

  const barData = _(sessions)
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
      labelComponent: () => renderLabel(item.label),
    }))
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
