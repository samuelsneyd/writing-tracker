import * as React from 'react';
import { ListItemProps } from '@ui-kitten/components';
import { globalSignOut, signOut } from '../../auth/auth';
import { ArrowIosForwardIcon } from '../../components/Icons/Icons';
import AnimatedTabIndicatorToggle from '../../components/Settings/AnimatedTabIndicatorToggle';
import NotificationsToggle from '../../components/Settings/NotificationsToggle';
import WeekStartsOnRadioButtonGroup from '../../components/Settings/WeekStartsOnRadioButtonGroup';

type SettingsListItem = ListItemProps & {
  status?: 'basic' | 'primary' | 'info' | 'warning' | 'danger';
  isSeparator?: boolean;
};

const separator: SettingsListItem = {
  isSeparator: true,
};

export const data: SettingsListItem[] = [
  {
    title: 'Notifications',
    description: 'Enable or disable notifications',
    accessoryRight: NotificationsToggle,
    status: 'basic',
  },
  {
    title: 'Animated Tab Indicator',
    description: 'Enable or disable tab sliding animations',
    accessoryRight: AnimatedTabIndicatorToggle,
    status: 'basic',
  },
  {
    title: 'Week Starts On',
    description: 'For weekly goals and charts',
    accessoryRight: WeekStartsOnRadioButtonGroup,
    status: 'basic',
  },
  separator,
  {
    title: 'Contact Us',
    accessoryRight: ArrowIosForwardIcon,
    status: 'basic',
  },
  separator,
  {
    title: 'Log Out',
    description: 'Log out on this device',
    onPress: signOut,
    status: 'danger',
  },
  separator,
  {
    title: 'Global Log Out',
    description: 'Log out on all devices',
    onPress: globalSignOut,
    status: 'danger',
  },
];
