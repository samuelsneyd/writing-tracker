import * as React from 'react';
import _ from 'lodash';
import { Text, TextElement } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { BarDataItemType } from './chart-types';

/**
 * Returns a text component for rendering a chart tooltip.
 * @param item the bar data item.
 * @param prefix an optional prefix.
 * @param suffix an optional suffix.
 * @param fractionDigits limit decimal places for floating-point numbers.
 */
export const renderTooltip = (
  item: BarDataItemType,
  prefix: string = '',
  suffix: string = '',
  fractionDigits: number | undefined = undefined,
): TextElement => {
  let value = '';
  if (fractionDigits !== undefined && item.value !== undefined) {
    value = item.value.toFixed(fractionDigits);
  } else if (item.value !== undefined) {
    value = item.value.toLocaleString();
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
  <Text
    style={styles.barLabel}
    appearance="hint"
    numberOfLines={1}
  >{label}</Text>
);

/**
 * Returns the maximum value to display on the top of the y-axis, based on the bar data.
 * @param barData the bar chart data array, used to calculate the max value.
 * @param defaultMax if the chart has no data, or if the data isn't loaded yet,
 * the default max is used for the top y-axis label.
 * @param step the value by which the top y-axis label will update. E.g., if the
 * value is 1001 and the step is 1000, the top of the y-axis will be 2000.
 */
export const getMaxYAxisValue = (barData: BarDataItemType[], defaultMax = 1000, step = 1000): number => {
  const dataCeiling = Math.ceil(_.max(barData.map(d => (d.value ?? 0) / step)) || 0) * step;
  return dataCeiling || defaultMax;
};

/**
 * Returns an array of 4 text values to use as the Y axis label texts
 * TODO - make the step count dynamic (e.g., 4 labels, 10 labels, etc).
 * @param maxYAxisValue the maximum value in the y-axis.
 * @param prefix an optional prefix.
 * @param suffix an optional suffix.
 */
export const getYAxisLabelTexts = (maxYAxisValue: number, prefix: string = '', suffix: string = ''): string[] => {
  const kLimit = 10000;
  return [
    0,
    maxYAxisValue / 4,
    maxYAxisValue / 2,
    (maxYAxisValue / 4) * 3,
    maxYAxisValue,
  ].map(n => {
    if (n === 0 || maxYAxisValue < kLimit) {
      return `${prefix}${n.toLocaleString()}${suffix}`;
    }
    return `${prefix}${n / 1000}K${suffix}`;
  });
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
  },
});

export default chartUtil;
