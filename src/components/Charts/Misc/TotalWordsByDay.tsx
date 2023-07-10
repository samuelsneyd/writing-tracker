import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { format, setDefaultOptions } from 'date-fns';
import { useAppSelector } from '../../../store/hooks';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import { defaultChartStyles } from '../chart-styles';
import type { ChartProps, BarDataItemType } from '../chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from '../chart-utils';

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
      .value(),
    [reduxSessions, theme],
  );

  const trackedWords = React.useMemo(
    () => Math.round(_.sumBy(barData, 'value')),
    [barData],
  );
  const initialWords = React.useMemo(
    () => Math.round(_.sumBy(reduxProjects, 'initialWords')),
    [reduxProjects],
  );
  const totalWords = trackedWords + initialWords;

  const maxValue = React.useMemo(() => getMaxYAxisValue(barData), [barData]);
  const yAxisLabelTexts = React.useMemo(() => getYAxisLabelTexts(maxValue), [maxValue]);

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