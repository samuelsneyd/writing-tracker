import { default as defaultTheme } from '@eva-design/eva';
import { CustomTheme } from './themes';

const overrideTheme: CustomTheme = {
  'color-primary-100': '#FAF5DA',
  'color-primary-200': '#F6EAB8',
  'color-primary-300': '#E6D28E',
  'color-primary-400': '#CDB46B',
  'color-primary-500': '#AD8D3F',
  'color-primary-600': '#94732E',
  'color-primary-700': '#7C5B1F',
  'color-primary-800': '#644514',
  'color-primary-900': '#53350C',
  'color-success-100': '#EBF8E5',
  'color-success-200': '#D6F1CC',
  'color-success-300': '#AED7A5',
  'color-success-400': '#81B07D',
  'color-success-500': '#4C7C4C',
  'color-success-600': '#376A3B',
  'color-success-700': '#26592F',
  'color-success-800': '#184724',
  'color-success-900': '#0E3B1E',
  'color-info-100': '#E6FBFB',
  'color-info-200': '#CFF4F7',
  'color-info-300': '#AFDFE7',
  'color-info-400': '#91C3D0',
  'color-info-500': '#6A9EB2',
  'color-info-600': '#4D7E99',
  'color-info-700': '#356180',
  'color-info-800': '#214567',
  'color-info-900': '#143155',
  'color-warning-100': '#FBEBD4',
  'color-warning-200': '#F7D4AB',
  'color-warning-300': '#E8AF7D',
  'color-warning-400': '#D18A59',
  'color-warning-500': '#B3592A',
  'color-warning-600': '#99411E',
  'color-warning-700': '#802C15',
  'color-warning-800': '#671B0D',
  'color-warning-900': '#550E08',
  'color-danger-100': '#FBE5D9',
  'color-danger-200': '#F7C5B4',
  'color-danger-300': '#E79A8A',
  'color-danger-400': '#D07067',
  'color-danger-500': '#B23A3A',
  'color-danger-600': '#992A33',
  'color-danger-700': '#801D2E',
  'color-danger-800': '#671228',
  'color-danger-900': '#550B24',
};

export const steampunkTheme = {
  ...defaultTheme,
  ...overrideTheme,
};
