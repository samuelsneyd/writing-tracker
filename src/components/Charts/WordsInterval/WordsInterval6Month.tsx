import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import {
  add,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  getMonth,
  getWeekOfMonth,
  isWithinInterval,
  lastDayOfWeek,
  setDefaultOptions,
  startOfMonth,
  startOfWeek,
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

export const WordsInterval6Month = (props: ChartProps): React.ReactElement => {
  const { showTitle = true, chartContainerStyle = defaultChartStyles.chartContainer } = props;
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const settings = useAppSelector(state => state.settings);
  setDefaultOptions({ weekStartsOn: settings.weekStartsOn });
  const today = new Date();
  const startOfThisYear = startOfYear(today).getTime();
  const midYearCutoffLower = endOfMonth(add(startOfThisYear, { months: 5 })).getTime();
  const midYearCutoffUpper = add(startOfThisYear, { months: 6 }).getTime();
  const endOfThisYear = endOfYear(today).getTime();

  const firstInterval: Interval = {
    start: startOfThisYear,
    end: midYearCutoffLower,
  };
  const secondInterval: Interval = {
    start: midYearCutoffUpper,
    end: endOfThisYear,
  };
  const initialInterval = getMonth(today) < 6 ? firstInterval : secondInterval;
  const [interval, setInterval] = React.useState<Interval>(initialInterval);
  const allWeeksInInterval = React.useMemo(
    () => eachWeekOfInterval(interval).map(date => date.toISOString()),
    [interval.start, interval.end, settings.weekStartsOn],
  );

  let showLabel = false;

  // Sum words of all projects, grouped by week
  const barData = React.useMemo(
    () => _(reduxSessions)
      .filter(session => isWithinInterval(new Date(session.date), interval))
      .map(session => ({
        value: session.words,
        week: startOfWeek(new Date(session.date)).toISOString(),
      }))
      .groupBy('week')
      .mapValues(group => _.sumBy(group, 'value'))
      .defaults(_.zipObject(allWeeksInInterval, Array(allWeeksInInterval.length).fill(0)))
      .map((value, week): BarDataItemType => {
        return ({
          week,
          value,
          labelComponent: () => {
            // Show label if the week contains the first of the month
            let label;
            const start = new Date(week);
            const end = endOfWeek(start);

            if (getWeekOfMonth(start) === 1) {
              showLabel = true;
              label = format(start, 'MMM');
            } else if (getWeekOfMonth(end) === 1) {
              showLabel = true;
              label = format(end, 'MMM');
            }

            if (showLabel) {
              showLabel = false;
              return renderLabel(label, 3);
            }
          },
        });
      })
      // Sort chronologically
      .sortBy('week')
      .value(),
    [reduxSessions, interval.start, interval.end, allWeeksInInterval],
  );

  const themedBarData = useThemedBarData(barData, theme);

  // Average per week during current interval
  const average = React.useMemo(
    () => Math.round(_(barData).filter(data => data.value).meanBy('value')) || 0,
    [barData],
  );

  const maxValue = React.useMemo(() => getMaxYAxisValue(barData, 2000, 2000), [barData]);
  const yAxisLabelTexts = React.useMemo(() => getYAxisLabelTexts(maxValue), [maxValue]);

  const numberOfBars = allWeeksInInterval.length;
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
      {showTitle && <Text category="h6">Words (6 months)</Text>}
      <ChartAggregateHeader
        aggregateText="weekly average"
        value={average}
        valueText="words"
        intervalText={formatInterval(interval)}
        onBackButtonPress={() => setInterval({
          start: startOfMonth(sub(interval.start, { months: 6 })).getTime(),
          end: endOfMonth(sub(interval.end, { months: 6 })).getTime(),
        })}
        onForwardButtonPress={() => setInterval({
          start: startOfMonth(add(interval.start, { months: 6 })).getTime(),
          end: endOfMonth(add(interval.end, { months: 6 })).getTime(),
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
          renderTooltip={(item: BarDataItemType) => {
            const start = format(new Date(item.week), 'd');
            const end = format(lastDayOfWeek(new Date(item.week)), 'd MMM');
            return renderTooltip(item, `${start} -\n${end}\n`);
          }}
          leftShiftForTooltip={20}
          leftShiftForLastIndexTooltip={30}
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
