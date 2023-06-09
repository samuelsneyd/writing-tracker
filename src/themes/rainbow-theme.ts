import { default as defaultTheme } from '@eva-design/eva';
import type { CustomTheme } from './themes';

const overrideTheme: CustomTheme = {
  'color-primary-100': '#FFE1E0',
  'color-primary-200': '#FFC1C3',
  'color-primary-300': '#FFA2AF',
  'color-primary-400': '#FF8BA7',
  'color-primary-500': '#FF6599',
  'color-primary-600': '#DB4989',
  'color-primary-700': '#B73279',
  'color-primary-800': '#932069',
  'color-primary-900': '#7A135E',
  'color-success-100': '#CEF8C7',
  'color-success-200': '#97F292',
  'color-success-300': '#58D95F',
  'color-success-400': '#2EB342',
  'color-success-500': '#028121',
  'color-success-600': '#016E26',
  'color-success-700': '#015C29',
  'color-success-800': '#004A28',
  'color-success-900': '#003D27',
  'color-info-100': '#CCE1FF',
  'color-info-200': '#99C0FF',
  'color-info-300': '#669CFF',
  'color-info-400': '#3F7EFF',
  'color-info-500': '#004CFF',
  'color-info-600': '#003ADB',
  'color-info-700': '#002BB7',
  'color-info-800': '#002BB7',
  'color-info-900': '#00157A',
  'color-warning-100': '#FFF1CC',
  'color-warning-200': '#FFDF99',
  'color-warning-300': '#FFC866',
  'color-warning-400': '#FFB23F',
  'color-warning-500': '#FF8D00',
  'color-warning-600': '#DB6F00',
  'color-warning-700': '#B75400',
  'color-warning-800': '#933D00',
  'color-warning-900': '#7A2D00',
  'color-danger-100': '#FDDCCA',
  'color-danger-200': '#FCB197',
  'color-danger-300': '#F77C62',
  'color-danger-400': '#EF4B3B',
  'color-danger-500': '#E50000',
  'color-danger-600': '#C40011',
  'color-danger-700': '#A4001C',
  'color-danger-800': '#840022',
  'color-danger-900': '#6D0026',
  // 'color-basic-100': '#FFFFFF',
  // 'color-basic-200': '#F5F5F5',
  // 'color-basic-300': '#F5F5F5',
  // 'color-basic-400': '#D4D4D4',
  // 'color-basic-500': '#B3B3B3',
  // 'color-basic-600': '#808080',
  // 'color-basic-700': '#4A4A4A',
  // 'color-basic-800': '#383838',
  // 'color-basic-900': '#292929',
  // 'color-basic-1000': '#1F1F1F',
  // 'color-basic-1100': '#141414',
  // 'color-basic-transparent-100': 'rgba(128, 128, 128, 0.08)',
  // 'color-basic-transparent-200': 'rgba(128, 128, 128, 0.16)',
  // 'color-basic-transparent-300': 'rgba(128, 128, 128, 0.24)',
  // 'color-basic-transparent-400': 'rgba(128, 128, 128, 0.32)',
  // 'color-basic-transparent-500': 'rgba(128, 128, 128, 0.4)',
  // 'color-basic-transparent-600': 'rgba(128, 128, 128, 0.48)',
};

const customSettings = {
  useRainbow: true,
  rainbowLength: 7,
  'color-rainbow-0-100': '#FFE1E0',
  'color-rainbow-0-200': '#FFC1C3',
  'color-rainbow-0-300': '#FFA2AF',
  'color-rainbow-0-400': '#FF8BA7',
  'color-rainbow-0-500': '#FF6599',
  'color-rainbow-0-600': '#DB4989',
  'color-rainbow-0-700': '#B73279',
  'color-rainbow-0-800': '#932069',
  'color-rainbow-0-900': '#7A135E',
  'color-rainbow-1-100': '#FDDCCA',
  'color-rainbow-1-200': '#FCB197',
  'color-rainbow-1-300': '#F77C62',
  'color-rainbow-1-400': '#EF4B3B',
  'color-rainbow-1-500': '#E50000',
  'color-rainbow-1-600': '#C40011',
  'color-rainbow-1-700': '#A4001C',
  'color-rainbow-1-800': '#840022',
  'color-rainbow-1-900': '#6D0026',
  'color-rainbow-2-100': '#FFF1CC',
  'color-rainbow-2-200': '#FFDF99',
  'color-rainbow-2-300': '#FFC866',
  'color-rainbow-2-400': '#FFB23F',
  'color-rainbow-2-500': '#FF8D00',
  'color-rainbow-2-600': '#DB6F00',
  'color-rainbow-2-700': '#B75400',
  'color-rainbow-2-800': '#933D00',
  'color-rainbow-2-900': '#7A2D00',
  'color-rainbow-3-100': '#FFFDCC',
  'color-rainbow-3-200': '#FFFA99',
  'color-rainbow-3-300': '#FFF666',
  'color-rainbow-3-400': '#FFF33F',
  'color-rainbow-3-500': '#FFEE00',
  'color-rainbow-3-600': '#DBCB00',
  'color-rainbow-3-700': '#B7A800',
  'color-rainbow-3-800': '#938600',
  'color-rainbow-3-900': '#7A6E00',
  'color-rainbow-4-100': '#CEF8C7',
  'color-rainbow-4-200': '#97F292',
  'color-rainbow-4-300': '#58D95F',
  'color-rainbow-4-400': '#2EB342',
  'color-rainbow-4-500': '#028121',
  'color-rainbow-4-600': '#016E26',
  'color-rainbow-4-700': '#015C29',
  'color-rainbow-4-800': '#004A28',
  'color-rainbow-4-900': '#003D27',
  'color-rainbow-5-100': '#CCE1FF',
  'color-rainbow-5-200': '#99C0FF',
  'color-rainbow-5-300': '#669CFF',
  'color-rainbow-5-400': '#3F7EFF',
  'color-rainbow-5-500': '#004CFF',
  'color-rainbow-5-600': '#003ADB',
  'color-rainbow-5-700': '#002BB7',
  'color-rainbow-5-800': '#002BB7',
  'color-rainbow-5-900': '#00157A',
  'color-rainbow-6-100': '#F9C7EF',
  'color-rainbow-6-200': '#F391E8',
  'color-rainbow-6-300': '#DB57D6',
  'color-rainbow-6-400': '#B12DB7',
  'color-rainbow-6-500': '#770088',
  'color-rainbow-6-600': '#5D0074',
  'color-rainbow-6-700': '#460061',
  'color-rainbow-6-800': '#32004E',
  'color-rainbow-6-900': '#240041',
};

export const rainbowTheme = {
  ...defaultTheme,
  ...overrideTheme,
  ...customSettings,
};
