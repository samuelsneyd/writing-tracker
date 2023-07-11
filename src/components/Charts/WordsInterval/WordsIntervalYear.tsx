import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import {
  add,
  eachMonthOfInterval,
  endOfYear,
  format,
  isWithinInterval,
  setDefaultOptions,
  startOfMonth,
  startOfYear,
  sub,
} from 'date-fns';
import useThemedBarData from '../../../hooks/useThemedBarData/useThemedBarData';
import { useAppSelector } from '../../../store/hooks';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import { defaultChartStyles } from '../chart-styles';
import type { ChartProps, BarDataItemType } from '../chart-types';
import {
  formatInterval,
  getMaxYAxisValue,
  getStaticBarChartDimensions,
  getYAxisLabelTexts,
  renderLabel,
  renderTooltip,
} from '../chart-utils';

setDefaultOptions({ weekStartsOn: 1 });

export const WordsIntervalYear = (props: ChartProps): React.ReactElement => {
  const { showTitle = true, chartContainerStyle = defaultChartStyles.chartContainer } = props;
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const today = new Date();
  const [interval, setInterval] = React.useState<Interval>({
    start: startOfYear(today).getTime(),
    end: endOfYear(today).getTime(),
  });
  const allMonthsInInterval = React.useMemo(
    () => eachMonthOfInterval(interval).map(date => date.toISOString()),
    [interval.start, interval.end],
  );

  // Sum words of all projects, grouped by month
  const barData = React.useMemo(
    () => _(reduxSessions)
      .filter(session => isWithinInterval(new Date(session.date), interval))
      .map(session => ({
        value: session.words,
        month: startOfMonth(new Date(session.date)).toISOString(),
      }))
      .groupBy('month')
      .mapValues(group => _.sumBy(group, 'value'))
      .defaults(_.zipObject(allMonthsInInterval, Array(allMonthsInInterval.length).fill(0)))
      .map((value, month): BarDataItemType => {
        return ({
          month,
          value,
          labelComponent: () => {
            return renderLabel(format(new Date(month), 'MMM')[0], 2);
          },
        });
      })
      // Sort chronologically
      .sortBy('month')
      .value(),
    [reduxSessions, interval.start, interval.end, allMonthsInInterval, theme],
  );

  const themedBarData = useThemedBarData(barData, theme);

  // Average per month for the current interval
  const average = React.useMemo(
    () => Math.round(_(barData).filter(data => data.value).meanBy('value')) || 0,
    [barData],
  );

  const maxValue = React.useMemo(() => getMaxYAxisValue(barData, 2000, 2000), [barData]);
  const yAxisLabelTexts = React.useMemo(() => getYAxisLabelTexts(maxValue), [maxValue]);

  const numberOfBars = allMonthsInInterval.length;
  const yAxisLabelWidth = 50;
  const initialSpacing = 8;
  const spacing = 6;
  const barBorderRadius = 3;
  const { chartWidth, barWidth } = React.useMemo(
    () => getStaticBarChartDimensions(numberOfBars, yAxisLabelWidth, initialSpacing, spacing),
    [numberOfBars],
  );

  return (
    <>
      {showTitle && <Text category="h6">Words (year)</Text>}
      <ChartAggregateHeader
        aggregateText="monthly average"
        value={average}
        valueText="words"
        intervalText={formatInterval(interval)}
        onBackButtonPress={() => setInterval({
          start: sub(interval.start, { years: 1 }),
          end: sub(interval.end, { years: 1 }),
        })}
        onForwardButtonPress={() => setInterval({
          start: add(interval.start, { years: 1 }),
          end: add(interval.end, { years: 1 }),
        })}
        forwardButtonDisabled={isWithinInterval(today, interval)}
      />
      <Layout style={chartContainerStyle}>
        <BarChart
          data={themedBarData}
          width={chartWidth}
          frontColor={theme['color-primary-500']}
          gradientColor={theme['color-primary-300']}
          showGradient
          barBorderRadius={barBorderRadius}
          hideRules
          barWidth={barWidth}
          spacing={spacing}
          initialSpacing={initialSpacing}
          maxValue={maxValue}
          noOfSections={4}
          renderTooltip={(item: BarDataItemType) => renderTooltip(item, `${format(new Date(item.month), 'MMM')}\n`)}
          leftShiftForTooltip={12}
          leftShiftForLastIndexTooltip={22}
          yAxisLabelWidth={yAxisLabelWidth}
          yAxisLabelTexts={yAxisLabelTexts}
          yAxisTextStyle={{ color: theme['text-hint-color'] }}
          yAxisColor={theme['text-hint-color']}
          xAxisColor={theme['text-hint-color']}
          scrollToEnd
        />
      </Layout>
    </>
  );
};
