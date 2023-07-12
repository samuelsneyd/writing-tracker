import AnimatedTabIndicatorToggle from '../../components/Settings/AnimatedTabIndicatorToggle';
import NotificationsToggle from '../../components/Settings/NotificationsToggle';
import WeekStartsOnRadioButtonGroup from '../../components/Settings/WeekStartsOnRadioButtonGroup';

export const data = [
  {
    title: 'Notifications',
    description: 'Enable or disable notifications',
    accessoryRight: NotificationsToggle,
  },
  {
    title: 'Week Starts On',
    description: 'For weekly goals and charts',
    accessoryRight: WeekStartsOnRadioButtonGroup,
  },
  {
    title: 'Animated Tab Indicator',
    description: 'Enable or disable tab sliding animations',
    accessoryRight: AnimatedTabIndicatorToggle,
  },
];
