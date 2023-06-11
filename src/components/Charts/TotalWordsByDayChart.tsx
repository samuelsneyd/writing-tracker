import * as React from 'react';
import _ from 'lodash';
import { Session } from '../../models';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { BarDataItemType } from './chart-types';
import { renderLabel, renderTooltip } from './chart-utils';

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

  const getMaxYAxisValue = (): number => {
    const defaultMax = 1000;
    const step = 1000;
    const dataCeiling = Math.ceil(_.max(barData.map(d => (d.value ?? 0) / step)) || 0) * step;
    return dataCeiling || defaultMax;
  };

  const getYAxisLabels = (): string[] => {
    const maxYAxisValue = getMaxYAxisValue();
    const kLimit = 10000;
    return [
      0,
      maxYAxisValue / 4,
      maxYAxisValue / 2,
      (maxYAxisValue / 4) * 3,
      maxYAxisValue,
    ].map(n => {
      if (n === 0 || maxYAxisValue < kLimit) {
        return n.toLocaleString();
      }
      return `${n / 1000}K`;
    });
  };

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
        maxValue={getMaxYAxisValue()}
        noOfSections={4}
        renderTooltip={renderTooltip}
        leftShiftForTooltip={3}
        leftShiftForLastIndexTooltip={3}
        yAxisLabelWidth={50}
        yAxisLabelTexts={getYAxisLabels()}
        yAxisTextStyle={{ color: theme['text-hint-color'] }}
        yAxisColor={theme['text-hint-color']}
        xAxisColor={theme['text-hint-color']}
        disableScroll
      />
    </>
  );
};

export default TotalWordsByDayChart;
