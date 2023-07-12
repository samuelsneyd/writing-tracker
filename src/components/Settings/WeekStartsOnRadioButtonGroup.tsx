import * as React from 'react';
import { Radio, RadioGroup } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { settingsSet } from '../../store/settings/settingsSlice';

const WeekStartsOnRadioButtonGroup = () => {
  const settings = useAppSelector(state => state.settings);
  const dispatch = useAppDispatch();
  const [selectedIndex, setSelectedIndex] = React.useState<number>(settings.weekStartsOn);

  return (
    <RadioGroup
      style={styles.horizontalContainer}
      selectedIndex={selectedIndex}
      onChange={index => {
        dispatch(settingsSet({ ...settings, weekStartsOn: index as 0 | 1 }));
        setSelectedIndex(index);
      }}
    >
      <Radio>Sunday</Radio>
      <Radio>Monday</Radio>
    </RadioGroup>
  );
};

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
  },
});

export default WeekStartsOnRadioButtonGroup;
