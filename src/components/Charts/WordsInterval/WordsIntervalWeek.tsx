import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import {
  add,
  eachDayOfInterval,
  endOfWeek,
  format,
  getDay,
  isWithinInterval,
  setDefaultOptions,
  startOfDay,
  startOfWeek,
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

export const WordsIntervalWeek = (props: ChartProps): React.ReactElement => {
  const { showTitle = true, chartContainerStyle = defaultChartStyles.chartContainer } = props;
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const today = new Date();
  const [interval, setInterval] = React.useState<Interval>({
    start: startOfWeek(today).getTime(),
    end: endOfWeek(today).getTime(),
  });
  const allDatesInInterval = React.useMemo(
    () => eachDayOfInterval(interval).map(date => date.toISOString()),
    [interval.start, interval.end],
  );

  // Sum words of all projects, grouped by day of the week
  const barData = React.useMemo(
    () => _(reduxSessions)
      .filter(session => isWithinInterval(new Date(session.date), interval))
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
        const label = format(dayDate, 'E');
        return ({
          day,
          dayIndex,
          value,
          labelComponent: () => renderLabel(label),
        });
      })
      // Sort chronologically
      .sortBy('day')
      .value(),
    [reduxSessions, interval.start, interval.end, allDatesInInterval],
  );

  const themedBarData = useThemedBarData(barData, theme);

  // Average per day during current interval
  const average = React.useMemo(
    () => Math.round(_(barData).filter(data => data.value).meanBy('value')) || 0,
    [barData],
  );

  const maxValue = React.useMemo(() => getMaxYAxisValue(barData), [barData]);
  const yAxisLabelTexts = React.useMemo(() => getYAxisLabelTexts(maxValue), [maxValue]);

  const numberOfBars = 7;
  const yAxisLabelWidth = 50;
  const initialSpacing = 20;
  const spacing = 15;
  const barBorderRadius = 4;
  const { chartWidth, barWidth } = getStaticBarChartDimensions(numberOfBars, yAxisLabelWidth, initialSpacing, spacing);

  return (
    <>
      {showTitle && <Text category="h6">Words (week)</Text>}
      <ChartAggregateHeader
        aggregateText="daily average"
        value={average}
        valueText="words"
        intervalText={formatInterval(interval)}
        onBackButtonPress={() => setInterval({
          start: sub(interval.start, { weeks: 1 }),
          end: sub(interval.end, { weeks: 1 }),
        })}
        onForwardButtonPress={() => setInterval({
          start: add(interval.start, { weeks: 1 }),
          end: add(interval.end, { weeks: 1 }),
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
          barWidth={barWidth}
          barBorderRadius={barBorderRadius}
          hideRules
          spacing={spacing}
          initialSpacing={initialSpacing}
          maxValue={maxValue}
          noOfSections={4}
          renderTooltip={(item: BarDataItemType) =>
            renderTooltip(item, `${format(new Date(item.day), 'MMM d')}\n`)
          }
          leftShiftForTooltip={7}
          leftShiftForLastIndexTooltip={3}
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
