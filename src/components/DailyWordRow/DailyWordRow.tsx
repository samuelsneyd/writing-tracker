import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Layout, Toggle } from '@ui-kitten/components';

type DailyWordRowProps = {
  day: string,
  targetState: number,
  setTargetState: React.Dispatch<number>,
  enabledState: boolean,
  setEnabledState: React.Dispatch<boolean>,
};

/**
 * A component that renders a toggle and connected input for daily word targets.
 * The input is enabled/disabled by the toggle.
 */
const DailyWordRow = (props: DailyWordRowProps) => (
  <Layout style={styles.dailyTargetRow}>
    <Toggle
      style={styles.dailyTargetRowItem}
      checked={props.enabledState}
      onChange={() => {
        props.setTargetState(0);
        props.setEnabledState(!props.enabledState);
      }}
    >{props.day}</Toggle>
    <Input
      style={styles.dailyTargetRowItem}
      placeholder="0"
      value={props.targetState ? props.targetState.toString() : ''}
      onChangeText={nextValue => {
        // Limit input to integers
        props.setTargetState(parseInt(nextValue.replace(/\D/g, '')) || 0);
      }}
      disabled={!props.enabledState}
      keyboardType="number-pad"
    ></Input>
  </Layout>
);

const styles = StyleSheet.create({
  dailyTargetRow: {
    flexDirection: 'row',
  },
  dailyTargetRowItem: {
    flex: 1,
  },
});

export default DailyWordRow;
