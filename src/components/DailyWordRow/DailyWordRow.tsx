import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Layout, Toggle } from '@ui-kitten/components';

type DailyWordRowProps = {
  day: string,
  targetState: number,
  setTargetState: React.Dispatch<number>,
  checkedState: boolean,
  setCheckedState: React.Dispatch<boolean>,
};

const DailyWordRow = (props: DailyWordRowProps) => (
  <Layout style={styles.dailyTargetRow}>
    <Toggle
      style={styles.dailyTargetRowItem}
      checked={props.checkedState}
      onChange={() => {
        props.setTargetState(0);
        props.setCheckedState(!props.checkedState);
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
      disabled={!props.checkedState}
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
