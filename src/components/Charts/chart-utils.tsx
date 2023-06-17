import * as React from 'react';
import _ from 'lodash';
import { Text, TextElement, ThemeType } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
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

  return (
    <Text appearance="hint" style={styles.toolTip}>{prefix}{value}{suffix}</Text>
  );
};

/**
 * Returns a text component for rendering bar charts' x-axis labels.
 * @param label the text to render for the label.
 */
export const renderLabel = (label: string | undefined): TextElement => (
  <Text style={styles.barLabel} appearance="hint" numberOfLines={2}>{label}</Text>
);

/**
 * Returns the maximum value to display on the top of the y-axis, based on the bar data.
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
  const dataValues = barData.map(d => (d.value ?? 0) * offset / step);
  const dataCeiling = Math.ceil(_.max(dataValues) || 0) * step;
  return Math.max(dataCeiling, defaultMax);
};

/**
 * Returns an array of 4 text values to use as the Y axis label texts
 * TODO - make the step count dynamic (e.g., 4 labels, 10 labels, etc).
 * @param maxYAxisValue the maximum value in the y-axis.
 * @param prefix an optional prefix.
 * @param suffix an optional suffix.
 * @param offset multiplies all values by this offset.
 */
export const getYAxisLabelTexts = (
  maxYAxisValue: number,
  prefix: string = '',
  suffix: string = '',
  offset: number = 1,
): string[] => {
  const kLimit = 10000;
  return [
    0,
    maxYAxisValue / 4,
    maxYAxisValue / 2,
    (maxYAxisValue / 4) * 3,
    maxYAxisValue,
  ]
    .map(n => n * offset)
    .map(n => {
      if (n === 0 || maxYAxisValue < kLimit) {
        return `${prefix}${n.toLocaleString()}${suffix}`;
      }
      return `${prefix}${n / 1000}K${suffix}`;
    });
};

/**
 * Gets stepped colors based on the item's value's percentage of the max value.
 * >= 100%: success.
 * 75-100%: primary.
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
    colorStyle = 'primary';
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

const chartUtil = {
  renderTooltip,
  renderLabel,
  getMaxYAxisValue,
  getYAxisLabelTexts,
};

const styles = StyleSheet.create({
  toolTip: {
    textAlign: 'center',
  },
  barLabel: {
    textAlign: 'center',
    position: 'absolute',
    top: -20,
    width: '100%',
  },
});

export default chartUtil;
