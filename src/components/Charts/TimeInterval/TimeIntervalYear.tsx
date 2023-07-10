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
import { useAppSelector } from '../../../store/hooks';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import { defaultChartStyles } from '../chart-styles';
import type { ChartProps, BarDataItemType } from '../chart-types';
import {
  formatInterval,
  formatMinutesAsHourMinutes,
  getMaxYAxisValue,
  getYAxisLabelTexts,
  renderLabel,
  renderTooltip,
} from '../chart-utils';

setDefaultOptions({ weekStartsOn: 1 });

export const TimeIntervalYear = (props: ChartProps): React.ReactElement => {
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

  // Sum minutes of all projects, grouped by month
  const barData = React.useMemo(
    () => _(reduxSessions)
      .filter(session => isWithinInterval(new Date(session.date), interval))
      .map(session => ({
        value: session.minutes,
        month: startOfMonth(new Date(session.date)).toISOString(),
      }))
      .groupBy('month')
      .mapValues(group => _.sumBy(group, 'value'))
      .defaults(_.zipObject(allMonthsInInterval, Array(allMonthsInInterval.length).fill(0)))
      .map((value, month): BarDataItemType => ({
        month,
        value,
        labelComponent: () => {
          return renderLabel(format(new Date(month), 'MMM')[0], 2);
        },
      }))
      // Sort chronologically
      .sortBy('month')
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
    [reduxSessions, interval.start, interval.end, allMonthsInInterval, theme],
  );

  // Average minutes per month during current interval
  const average = React.useMemo(
    () => Math.round(_(barData).filter(data => data.value).meanBy('value')) || 0,
    [barData],
  );

  const maxValue = React.useMemo(
    () => getMaxYAxisValue(barData, 2 * 60, 2 * 60),
    [barData],
  );
  const yAxisLabelTexts = React.useMemo(
    () => getYAxisLabelTexts(maxValue, 4, '', 'h', 1 / 60),
    [maxValue],
  );
  const formattedTime = React.useMemo(() => formatMinutesAsHourMinutes(average), [average]);

  return (
    <>
      {showTitle && <Text category="h6">Time (year)</Text>}
      <ChartAggregateHeader
        aggregateText="monthly average"
        value={formattedTime}
        valueText=""
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
          data={barData}
          frontColor={theme['color-primary-500']}
          gradientColor={theme['color-primary-300']}
          showGradient
          barBorderRadius={3}
          hideRules
          barWidth={20}
          spacing={6}
          initialSpacing={8}
          maxValue={maxValue}
          noOfSections={4}
          renderTooltip={(item: BarDataItemType) =>
            renderTooltip(item, `${format(new Date(item.month), 'MMM')}\n`)
          }
          leftShiftForTooltip={12}
          leftShiftForLastIndexTooltip={22}
          yAxisLabelWidth={50}
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
