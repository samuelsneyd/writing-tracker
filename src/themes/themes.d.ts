/**
 * Defines the required schema for a custom theme, overriding the
 * default UI Kitten themes.
 */
export type customTheme = {
  // Primary & Semantics - 9 levels - hex

  'color-primary-100': string;
  'color-primary-200': string;
  'color-primary-300': string;
  'color-primary-400': string;
  'color-primary-500': string;
  'color-primary-600': string;
  'color-primary-700': string;
  'color-primary-800': string;
  'color-primary-900': string;

  // Success

  'color-success-100': string;
  'color-success-200': string;
  'color-success-300': string;
  'color-success-400': string;
  'color-success-500': string;
  'color-success-600': string;
  'color-success-700': string;
  'color-success-800': string;
  'color-success-900': string;

  // Info

  'color-info-100': string;
  'color-info-200': string;
  'color-info-300': string;
  'color-info-400': string;
  'color-info-500': string;
  'color-info-600': string;
  'color-info-700': string;
  'color-info-800': string;
  'color-info-900': string;

  // Warning

  'color-warning-100': string;
  'color-warning-200': string;
  'color-warning-300': string;
  'color-warning-400': string;
  'color-warning-500': string;
  'color-warning-600': string;
  'color-warning-700': string;
  'color-warning-800': string;
  'color-warning-900': string;

  // Danger

  'color-danger-100': string;
  'color-danger-200': string;
  'color-danger-300': string;
  'color-danger-400': string;
  'color-danger-500': string;
  'color-danger-600': string;
  'color-danger-700': string;
  'color-danger-800': string;
  'color-danger-900': string;

  // Basic - 11 levels

  'color-basic-100'?: string;
  'color-basic-200'?: string;
  'color-basic-300'?: string;
  'color-basic-400'?: string;
  'color-basic-500'?: string;
  'color-basic-600'?: string;
  'color-basic-700'?: string;
  'color-basic-800'?: string;
  'color-basic-900'?: string;
  'color-basic-1000'?: string;
  'color-basic-1100'?: string;

  // Transparent - 6 levels - rgba

  'color-basic-transparent-100'?: string;
  'color-basic-transparent-200'?: string;
  'color-basic-transparent-300'?: string;
  'color-basic-transparent-400'?: string;
  'color-basic-transparent-500'?: string;
  'color-basic-transparent-600'?: string;

  // Any

  [key: string]: string | undefined;
};
