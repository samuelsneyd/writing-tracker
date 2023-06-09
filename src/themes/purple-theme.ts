import { default as defaultTheme } from '@eva-design/eva';
import type { CustomTheme } from './themes';

const overrideTheme: CustomTheme = {
  'color-primary-100': '#F6C9FB',
  'color-primary-200': '#E896F7',
  'color-primary-300': '#C95FE7',
  'color-primary-400': '#A437CF',
  'color-primary-500': '#7404AF',
  'color-primary-600': '#5A0296',
  'color-primary-700': '#43027D',
  'color-primary-800': '#2F0165',
  'color-primary-900': '#220053',
  'color-success-100': '#F2FBCD',
  'color-success-200': '#E2F79D',
  'color-success-300': '#C6E76A',
  'color-success-400': '#A6D043',
  'color-success-500': '#7CB211',
  'color-success-600': '#65990C',
  'color-success-700': '#4F8008',
  'color-success-800': '#3C6705',
  'color-success-900': '#2E5503',
  'color-info-100': '#C9F7FB',
  'color-info-200': '#96E9F7',
  'color-info-300': '#5FCCE8',
  'color-info-400': '#37A8D2',
  'color-info-500': '#0379B5',
  'color-info-600': '#025E9B',
  'color-info-700': '#014682',
  'color-info-800': '#003168',
  'color-info-900': '#002356',
  'color-warning-100': '#FEF5CB',
  'color-warning-200': '#FEE898',
  'color-warning-300': '#FED765',
  'color-warning-400': '#FDC73F',
  'color-warning-500': '#FCAC00',
  'color-warning-600': '#D88C00',
  'color-warning-700': '#B56F00',
  'color-warning-800': '#925500',
  'color-warning-900': '#784200',
  'color-danger-100': '#FCE6D2',
  'color-danger-200': '#FAC7A6',
  'color-danger-300': '#F09D77',
  'color-danger-400': '#E17553',
  'color-danger-500': '#CE3D21',
  'color-danger-600': '#B12518',
  'color-danger-700': '#941110',
  'color-danger-800': '#770A12',
  'color-danger-900': '#620613',
};

export const purpleTheme = {
  ...defaultTheme,
  ...overrideTheme,
};
