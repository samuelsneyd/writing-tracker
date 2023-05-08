import React from 'react';
import { ImageStyle } from 'react-native';
import { MenuItem } from '../../components/MenuGridList/MenuGridList';
import { Icon } from '@ui-kitten/components';
import type { MoreStackParamList, RootTabParamList } from '../../types/types';

export type LayoutData = MenuItem & {
  route: keyof MoreStackParamList | keyof RootTabParamList;
};

export const data: LayoutData[] = [
  {
    title: 'Awards',
    route: 'Awards',
    icon: (style: ImageStyle) => <Icon {...style} name="award-outline" />,
  },
  {
    title: 'Themes',
    route: 'Themes',
    icon: (style: ImageStyle) => <Icon {...style} name="color-palette-outline" />,
  },
  {
    title: 'Challenges',
    route: 'Challenges',
    icon: (style: ImageStyle) => <Icon {...style} name="flag-outline" />,
  },
  {
    title: 'Charts',
    route: 'Charts',
    icon: (style: ImageStyle) => <Icon {...style} name="bar-chart-outline" />,
  },
  {
    title: 'Projects',
    route: 'ProjectsStackNavigator',
    icon: (style: ImageStyle) => <Icon {...style} name="book-open-outline" />,
  },
  {
    title: 'Goals',
    route: 'GoalsStackNavigator',
    icon: (style: ImageStyle) => <Icon {...style} name="edit-outline" />,
  },
  {
    title: 'Settings',
    route: 'Settings',
    icon: (style: ImageStyle) => <Icon {...style} name="settings-outline" />,
  },
];
