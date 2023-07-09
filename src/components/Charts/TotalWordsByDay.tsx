import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { format, setDefaultOptions } from 'date-fns';
import { useAppSelector } from '../../store/hooks';
import { defaultChartStyles } from './chart-styles';
import type { ChartProps, BarDataItemType } from './chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

setDefaultOptions({ weekStartsOn: 1 });

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const TotalWordsByDay = (props: ChartProps): React.ReactElement => {
  const { showTitle = true, chartContainerStyle = defaultChartStyles.chartContainer } = props;
  const theme = useTheme();
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);

  // Sum words of all projects, grouped by day of the week
  const barData = _(reduxSessions)
    .map(session => ({
      value: session.words,
      label: format(new Date(session.date), 'E'),
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

  const trackedWords = Math.round(_(barData).sumBy('value'));
  const initialWords = Math.round(_(reduxProjects).sumBy('initialWords'));

  const maxValue = getMaxYAxisValue(barData);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue);

  return (
    <>
      {showTitle && <Text category="h6" appearance="hint">Words by day of the week</Text>}
      <Text category="s1" appearance="hint">
        Total: {(trackedWords + initialWords).toLocaleString()}
        {initialWords && ` | Tracked: ${trackedWords.toLocaleString()} | Initial: ${initialWords.toLocaleString()}`}
      </Text>
      <Layout style={chartContainerStyle}>
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
          renderTooltip={(item: BarDataItemType) => renderTooltip(item)}
          leftShiftForTooltip={3}
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
