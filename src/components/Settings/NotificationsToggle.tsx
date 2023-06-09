import * as React from 'react';
import { Toggle } from '@ui-kitten/components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { settingsSet } from '../../store/settings/settingsSlice';

const NotificationsToggle = () => {
  const settings = useAppSelector(state => state.settings);
  const dispatch = useAppDispatch();

  return (
    <Toggle
      checked={settings.notificationsEnabled}
      onChange={() => dispatch(settingsSet({
        ...settings,
        notificationsEnabled: !settings.notificationsEnabled,
      }))}
    />
  );
};

export default NotificationsToggle;
