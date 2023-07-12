import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  getDaysInMonth,
  isWithinInterval,
  setDefaultOptions,
  startOfDay,
  startOfMonth,
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

export const WordsIntervalMonth = (props: ChartProps): React.ReactElement => {
  const { showTitle = true, chartContainerStyle = defaultChartStyles.chartContainer } = props;
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const settings = useAppSelector(state => state.settings);
  setDefaultOptions({ weekStartsOn: settings.weekStartsOn });
  const today = new Date();
  const [interval, setInterval] = React.useState<Interval>({
    start: startOfMonth(today).getTime(),
    end: endOfMonth(today).getTime(),
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
        const dayIndex = (getDay(dayDate) + settings.weekStartsOn) % 7;
        return ({
          day,
          dayIndex,
          value,
          // Only render label for first day of week
          labelComponent: () => {
            if (dayIndex === 0) {
              const label = format(dayDate, 'd');
              return renderLabel(label, 4);
            }
          },
        });
      })
      // Sort chronologically
      .sortBy('day')
      .value(),
    [reduxSessions, interval.start, interval.end, allDatesInInterval, settings.weekStartsOn],
  );

  const themedBarData = useThemedBarData(barData, theme);

  // Average per day during current interval
  const average = React.useMemo(
    () => Math.round(_(barData).filter(data => data.value).meanBy('value')) || 0,
    [barData],
  );

  const maxValue = React.useMemo(() => getMaxYAxisValue(barData), [barData]);
  const yAxisLabelTexts = React.useMemo(() => getYAxisLabelTexts(maxValue), [maxValue]);

  const numberOfBars = React.useMemo(() => getDaysInMonth(interval.start), [interval.start]);
  const yAxisLabelWidth = 50;
  const initialSpacing = 6;
  const spacing = 4;
  const barBorderRadius = 2;
  const { chartWidth, barWidth } = React.useMemo(
    () => getStaticBarChartDimensions(numberOfBars, yAxisLabelWidth, initialSpacing, spacing),
    [numberOfBars],
  );

  return (
    <>
      {showTitle && <Text category="h6">Words (month)</Text>}
      <ChartAggregateHeader
        aggregateText="daily average"
        value={average}
        valueText="words"
        intervalText={formatInterval(interval)}
        onBackButtonPress={() => setInterval({
          start: startOfMonth(sub(interval.start, { months: 1 })).getTime(),
          end: endOfMonth(sub(interval.end, { months: 1 })).getTime(),
        })}
        onForwardButtonPress={() => setInterval({
          start: startOfMonth(add(interval.start, { months: 1 })).getTime(),
          end: endOfMonth(add(interval.end, { months: 1 })).getTime(),
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
          renderTooltip={(item: BarDataItemType) =>
            renderTooltip(item, `${format(new Date(item.day), 'MMM d')}\n`)
          }
          leftShiftForTooltip={15}
          leftShiftForLastIndexTooltip={30}
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
