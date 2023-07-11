import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { format, setDefaultOptions } from 'date-fns';
import useThemedBarData from '../../../hooks/useThemedBarData/useThemedBarData';
import { useAppSelector } from '../../../store/hooks';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import { defaultChartStyles } from '../chart-styles';
import type { ChartProps, BarDataItemType } from '../chart-types';
import {
  getMaxYAxisValue,
  getStaticBarChartDimensions,
  getYAxisLabelTexts,
  renderLabel,
  renderTooltip,
} from '../chart-utils';

setDefaultOptions({ weekStartsOn: 1 });

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const TotalWordsByDay = (props: ChartProps): React.ReactElement => {
  const { showTitle = true, chartContainerStyle = defaultChartStyles.chartContainer } = props;
  const theme = useTheme();
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);

  // Sum words of all projects, grouped by day of the week
  const barData = React.useMemo(
    () => _(reduxSessions)
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
      .value(),
    [reduxSessions, theme],
  );

  const themedBarData = useThemedBarData(barData, theme);

  const trackedWords = React.useMemo(
    () => Math.round(_.sumBy(barData, 'value')),
    [barData],
  );
  const initialWords = React.useMemo(
    () => Math.round(_.sumBy(reduxProjects, 'initialWords')),
    [reduxProjects],
  );
  const totalWords = trackedWords + initialWords;

  const maxValue = React.useMemo(() => getMaxYAxisValue(barData, 2000, 2000), [barData]);
  const yAxisLabelTexts = React.useMemo(() => getYAxisLabelTexts(maxValue), [maxValue]);

  const numberOfBars = 7;
  const yAxisLabelWidth = 50;
  const initialSpacing = 20;
  const spacing = 15;
  const barBorderRadius = 4;
  const { chartWidth, barWidth } = getStaticBarChartDimensions(numberOfBars, yAxisLabelWidth, initialSpacing, spacing);

  return (
    <>
      {showTitle && <Text category="h6">Words by day of the week</Text>}
      <ChartAggregateHeader
        aggregateText="total"
        value={totalWords}
        valueText="words"
        intervalText={`Initial: ${initialWords.toLocaleString()} | Tracked: ${trackedWords.toLocaleString()}`}
        showNavButtons={false}
      />
      <Layout style={chartContainerStyle}>
        <BarChart
          data={themedBarData}
          width={chartWidth}
          frontColor={theme['color-primary-500']}
          gradientColor={theme['color-primary-300']}
          showGradient
          barWidth={barWidth}
          barBorderRadius={barBorderRadius}
          hideRules
          spacing={spacing}
          initialSpacing={initialSpacing}
          maxValue={maxValue}
          noOfSections={4}
          renderTooltip={(item: BarDataItemType) => renderTooltip(item)}
          leftShiftForTooltip={12}
          leftShiftForLastIndexTooltip={12}
          yAxisLabelWidth={yAxisLabelWidth}
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
