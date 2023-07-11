import React from 'react';
import { MenuItem } from '../../components/MenuGridList/MenuGridList';
import type { MoreStackParamList, RootTabParamList } from '../../types/types';
import {
  AwardIcon,
  BarChartIcon,
  BookIcon,
  ColorPaletteIcon,
  EditIcon,
  FlagIcon,
  SettingsIcon,
} from '../../components/Icons/Icons';

export type LayoutData = MenuItem & {
  route: keyof MoreStackParamList | keyof RootTabParamList;
};

export const data: LayoutData[] = [
  {
    title: 'Awards',
    route: 'Awards',
    icon: AwardIcon,
  },
  {
    title: 'Themes',
    route: 'Themes',
    icon: ColorPaletteIcon,
  },
  {
    title: 'Challenges',
    route: 'Challenges',
    icon: FlagIcon,
  },
  {
    title: 'Goals',
    route: 'Goals',
    icon: EditIcon,
  },
  {
    title: 'Projects',
    route: 'ProjectsStackNavigator',
    icon: BookIcon,
  },
  {
    title: 'Charts',
    route: 'ChartsStackNavigator',
    icon: BarChartIcon,
  },
];
