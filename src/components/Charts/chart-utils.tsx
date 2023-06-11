import { Text, TextElement } from '@ui-kitten/components';
import _ from 'lodash';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { BarDataItemType } from './chart-types';

export const renderTooltip = (item: BarDataItemType): TextElement => (
  <Text appearance="hint" style={styles.toolTip}>{item.value?.toLocaleString()}</Text>
);

export const renderLabel = (label: string | undefined): TextElement => (
  <Text
    style={styles.barLabel}
    appearance="hint"
    numberOfLines={1}
  >{label}</Text>
);

export const getMaxYAxisValue = (barData: BarDataItemType[], defaultMax = 1000, step = 1000): number => {
  const dataCeiling = Math.ceil(_.max(barData.map(d => (d.value ?? 0) / step)) || 0) * step;
  return dataCeiling || defaultMax;
};

export const getYAxisLabelTexts = (maxYAxisValue: number): string[] => {
  const kLimit = 10000;
  return [
    0,
    maxYAxisValue / 4,
    maxYAxisValue / 2,
    (maxYAxisValue / 4) * 3,
    maxYAxisValue,
  ].map(n => {
    if (n === 0 || maxYAxisValue < kLimit) {
      return n.toLocaleString();
    }
    return `${n / 1000}K`;
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
