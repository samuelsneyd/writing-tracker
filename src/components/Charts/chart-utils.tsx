import * as React from 'react';
import _ from 'lodash';
import { format, isSameDay, isSameMonth, isSameYear } from 'date-fns';
import { Text, TextElement, ThemeType } from '@ui-kitten/components';
import { Dimensions, StyleSheet } from 'react-native';
import { BarDataItemType } from './chart-types';

/**
 * Returns a text component for rendering a chart tooltip.
 * @param item the bar data item.
 * @param prefix an optional prefix.
 * @param suffix an optional suffix.
 * @param fractionDigits limit decimal places for floating-point numbers.
 * @param offset multiplies the value by this offset
 */
export const renderTooltip = (
  item: BarDataItemType,
  prefix: string = '',
  suffix: string = '',
  fractionDigits: number | undefined = undefined,
  offset: number = 1,
): TextElement => {
  let value = '';
  if (fractionDigits !== undefined && item.value !== undefined) {
    value = (item.value * offset).toFixed(fractionDigits);
  } else if (item.value !== undefined) {
    value = (item.value * offset).toLocaleString();
  }

  return <Text style={styles.toolTip}>{prefix}{value}{suffix}</Text>;
};

/**
 * Returns a text component for rendering bar charts' x-axis labels.
 * @param label the text to render for the label.
 * @param widthMultiplier multiply the width of the label component. Default = 1 (100%)
 */
export const renderLabel = (label: string | undefined, widthMultiplier: number = 1): TextElement => (
  <Text
    style={{
      ...styles.barLabel,
      width: `${100 * widthMultiplier}%`,
    }}
    appearance="hint"
    numberOfLines={2}
  >{label}</Text>
);

/**
 * Returns the maximum value to display on the top of the y-axis, based on the bar data.
 * Force the default max to be used by setting step = 0.
 * @param barData the bar chart data array, used to calculate the max value.
 * @param defaultMax if the chart has no data, or if the data isn't loaded yet,
 * the default max is used for the top y-axis label.
 * @param step the value by which the top y-axis label will update. E.g., if the
 * value is 1001 and the step is 1000, the top of the y-axis will be 2000.
 * @param offset multiplies the value by this offset
 */
export const getMaxYAxisValue = (
  barData: BarDataItemType[],
  defaultMax: number = 1000,
  step: number = 1000,
  offset: number = 1,
): number => {
  // Forces no steps above the default max, so default max is returned.
  if (step === 0) {
    return defaultMax;
  }
  const dataValues = barData.map(d => (d.value ?? 0) * offset / step);
  const dataCeiling = Math.ceil(_.max(dataValues) || 0) * step;

  return Math.max(dataCeiling, defaultMax);
};

/**
 * Returns an array of <stepCount> text values to use as the Y axis label texts
 * @param maxYAxisValue the maximum value in the y-axis.
 * @param stepCount the number of labels between 0 and the max value, excluding 0.
 * @param prefix an optional prefix.
 * @param suffix an optional suffix.
 * @param offset multiplies all values by this offset.
 * @param kLimit the cutoff point where thousands show 1K instead of 1000. Default 10K.
 */
export const getYAxisLabelTexts = (
  maxYAxisValue: number,
  stepCount: number = 4,
  prefix: string = '',
  suffix: string = '',
  offset: number = 1,
  kLimit: number = 10000,
): string[] => {
  const step = maxYAxisValue / stepCount;

  // Array of length stepCount + 1 spanning range (0, maxYAxisValue)
  return _.times(stepCount + 1, i => step * i * offset)
    // Add prefix, suffix, and 'K'
    .map(n =>
      n === 0 || maxYAxisValue < kLimit
        ? `${prefix}${n.toLocaleString()}${suffix}`
        : `${prefix}${n / 1000}K${suffix}`,
    );
};

/**
 * Gets stepped colors based on the item's value's percentage of the max value.
 * >= 100%: success.
 * 75-100%: info.
 * 50-75%: info.
 * 25-50%: warning.
 * 0-25%: danger.
 * No value: primary.
 * @param item the bar data item type.
 * @param theme the current Eva theme.
 * @param maxValue the default max value.
 */
export const getSteppedColors = (item: BarDataItemType, theme: ThemeType, maxValue: number = 100) => {
  let colorStyle: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  if (item.value === undefined || item.value === null) {
    colorStyle = 'primary';
  } else if (item.value >= maxValue) {
    colorStyle = 'success';
  } else if (item.value >= (maxValue / 4) * 3) {
    colorStyle = 'info';
  } else if (item.value >= maxValue / 2) {
    colorStyle = 'info';
  } else if (item.value >= maxValue / 4) {
    colorStyle = 'warning';
  } else {
    colorStyle = 'danger';
  }

  return {
    frontColor: theme[`color-${colorStyle}-500`],
    gradientColor: theme[`color-${colorStyle}-300`],
    showGradient: true,
  };
};

/**
 * Formats a date interval as a readable string, skipping the start
 * month/year when it would show as a duplicate of the end month/year.
 * @param interval the date interval to format.
 */
export const formatInterval = (interval: Interval): string => {
  const startFormat = isSameMonth(interval.start, interval.end)
    ? 'd'
    : isSameYear(interval.start, interval.end)
      ? 'd MMM'
      : 'd MMM yyyy';
  const endFormat = 'd MMM yyyy';

  return isSameDay(interval.start, interval.end)
    ? format(interval.end, endFormat)
    : `${format(interval.start, startFormat)} ‒ ${format(interval.end, endFormat)}`;
};

/**
 * Formats minutes as hours and minutes.
 *
 * 0 -> 0h 0m
 *
 * 30 -> 30m
 *
 * 60 -> 1h
 *
 * 90 -> 1h 30m
 * @param minutes the number of minutes.
 */
export const formatMinutesAsHourMinutes = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return (
    (hours || (!hours && !remainingMinutes) ? `${hours.toLocaleString()}h ` : '')
    + (remainingMinutes || (!hours && !remainingMinutes) ? `${remainingMinutes.toLocaleString()}m` : '')
  );
};

/**
 * Calculates chart and bar static widths for bar charts that do not allow scrolling
 * and that will
 * @param numberOfBars the number of bars that will show side by side.
 * @param yAxisLabelWidth how many pixels the yAxisLabel takes up.
 * @param initialSpacing initial distance between the yAxis and the first bar.
 * @param spacing distance between consecutive bars.
 */
export const getStaticBarChartDimensions = (
  numberOfBars: number,
  yAxisLabelWidth: number,
  initialSpacing: number,
  spacing: number,
) => {
  const screenWidth = Dimensions.get('window').width;
  const containerPaddingHorizontal = 8;
  const chartWidth = Math.floor(screenWidth - yAxisLabelWidth - (containerPaddingHorizontal * 2));
  const barWidth = (
    chartWidth
    - (initialSpacing * 2)
    - (spacing * (numberOfBars - 1))
    - containerPaddingHorizontal * 2
  ) / numberOfBars;

  return { chartWidth, barWidth };
};

const styles = StyleSheet.create({
  toolTip: {
    textAlign: 'center',
  },
  barLabel: {
    textAlign: 'center',
    position: 'absolute',
    top: -20,
    minWidth: '100%',
  },
});
