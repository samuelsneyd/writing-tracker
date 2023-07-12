import * as React from 'react';
import { Toggle } from '@ui-kitten/components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { settingsSet } from '../../store/settings/settingsSlice';

const AnimatedTabIndicatorToggle = () => {
  const settings = useAppSelector(state => state.settings);
  const dispatch = useAppDispatch();

  return (
    <Toggle
      checked={settings.tabBarIndicator}
      onChange={() => dispatch(settingsSet({
        ...settings,
        tabBarIndicator: !settings.tabBarIndicator,
      }))}
    />
  );
};

export default AnimatedTabIndicatorToggle;
