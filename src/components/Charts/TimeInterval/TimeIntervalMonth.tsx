import * as React from 'react';
import _ from 'lodash';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isWithinInterval,
  setDefaultOptions,
  startOfDay,
  startOfMonth,
  sub,
} from 'date-fns';
import { useAppSelector } from '../../../store/hooks';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import { BarDataItemType } from '../chart-types';
import {
  formatInterval,
  formatMinutesAsHourMinutes,
  getMaxYAxisValue,
  getYAxisLabelTexts,
  renderLabel,
  renderTooltip,
} from '../chart-utils';

setDefaultOptions({ weekStartsOn: 1 });

type Props = {
  showTitle?: boolean;
};

export const TimeIntervalMonth = (props: Props): React.ReactElement => {
  const { showTitle = true } = props;
  const theme = useTheme();
  const reduxSessions = useAppSelector(state => state.sessions);
  const today = new Date();
  const [interval, setInterval] = React.useState<Interval>({
    start: startOfMonth(today),
    end: endOfMonth(today),
  });
  const allDatesInInterval = eachDayOfInterval(interval).map(date => date.toISOString());

  // Sum minutes of all projects, grouped by day of the week
  const barData = _(reduxSessions)
    .filter(session => isWithinInterval(new Date(session.date), interval))
    .map(session => ({
      value: session.minutes,
      day: startOfDay(new Date(session.date)).toISOString(),
    }))
    .groupBy('day')
    .mapValues(group => _.sumBy(group, 'value'))
    .defaults(_.zipObject(allDatesInInterval, Array(allDatesInInterval.length).fill(0)))
    .map((value, day): BarDataItemType => {
      const dayDate = new Date(day);
      const dayIndex = (getDay(dayDate) + 6) % 7;
      return ({
        day,
        dayIndex,
        value,
        // Only render label for Mondays
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
    .map((item): BarDataItemType => (
      theme.useRainbow
        ? {
          ...item,
          frontColor: theme[`color-rainbow-${item.dayIndex % Number.parseInt(theme.rainbowLength)}-500`],
          gradientColor: theme[`color-rainbow-${item.dayIndex % Number.parseInt(theme.rainbowLength)}-300`],
          showGradient: true,
        }
        : item
    ))
    .value();

  // Average minutes during current interval
  const average = Math.round(_(barData).filter(data => data.value).meanBy('value')) || 0;

  const maxValue = getMaxYAxisValue(barData, 2 * 60, 2 * 60);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue, 4, '', 'h', 1 / 60);
  const formattedTime = formatMinutesAsHourMinutes(average);

  return (
    <>
      {showTitle && <Text category="h6">Time (month)</Text>}
      <ChartAggregateHeader
        aggregateText="daily average"
        value={formattedTime}
        valueText=""
        intervalText={formatInterval(interval)}
        onBackButtonPress={() => setInterval({
          start: startOfMonth(sub(interval.start, { months: 1 })),
          end: endOfMonth(sub(interval.end, { months: 1 })),
        })}
        onForwardButtonPress={() => setInterval({
          start: startOfMonth(add(interval.start, { months: 1 })),
          end: endOfMonth(add(interval.end, { months: 1 })),
        })}
        forwardButtonDisabled={isWithinInterval(today, interval)}
      />
      <BarChart
        data={barData}
        frontColor={theme['color-primary-500']}
        gradientColor={theme['color-primary-300']}
        showGradient
        barBorderRadius={2}
        hideRules
        barWidth={7}
        spacing={3}
        initialSpacing={3}
        maxValue={maxValue}
        noOfSections={4}
        renderTooltip={(item: BarDataItemType) =>
          renderTooltip(item, `${format(new Date(item.day), 'MMM d')}\n`)
        }
        leftShiftForTooltip={15}
        leftShiftForLastIndexTooltip={30}
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
