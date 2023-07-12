import * as React from 'react';
import { Toggle } from '@ui-kitten/components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { settingsSet } from '../../store/settings/settingsSlice';

const NotificationsToggle = () => {
  const settings = useAppSelector(state => state.settings);
  const dispatch = useAppDispatch();
  const [checked, setChecked] = React.useState<boolean>(settings.isNotificationsEnabled);

  return (
    <Toggle
      checked={checked}
      onChange={() => {
        setChecked(!settings.isNotificationsEnabled);
        dispatch(settingsSet({
          ...settings,
          isNotificationsEnabled: !settings.isNotificationsEnabled,
        }));
      }}
    />
  );
};

export default NotificationsToggle;
