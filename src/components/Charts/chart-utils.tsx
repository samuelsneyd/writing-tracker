import { Text, TextElement } from '@ui-kitten/components';
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

const chartUtil = {
  renderTooltip,
  renderLabel,
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
