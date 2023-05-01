import React from 'react';
import { ImageStyle } from 'react-native';
import { MenuItem } from '../../components/MenuGridList/MenuGridList';
import { Icon } from '@ui-kitten/components';

export type LayoutData = MenuItem & {
  route: string;
};

export const data: LayoutData[] = [
  {
    title: 'Awards',
    route: 'Awards',
    icon: (style: ImageStyle) => {
      return <Icon {...style} name="award-outline" />;
    },
  },
  {
    title: 'Themes',
    route: 'Themes',
    icon: (style: ImageStyle) => {
      return <Icon {...style} name="color-palette-outline" />;
    },
  },
  {
    title: 'Challenges',
    route: 'Challenges',
    icon: (style: ImageStyle) => {
      return <Icon {...style} name="flag-outline" />;
    },
  },
  {
    title: 'Charts',
    route: 'Charts',
    icon: (style: ImageStyle) => {
      return <Icon {...style} name="bar-chart-outline" />;
    },
  },
  {
    title: 'Projects',
    route: 'Projects',
    icon: (style: ImageStyle) => {
      return <Icon {...style} name="book-open-outline" />;
    },
  },
  {
    title: 'Goals',
    route: 'Goals',
    icon: (style: ImageStyle) => {
      return <Icon {...style} name="edit-outline" />;
    },
  },
  {
    title: 'Settings',
    route: 'Settings',
    icon: (style: ImageStyle) => {
      return <Icon {...style} name="settings-outline" />;
    },
  },
];
