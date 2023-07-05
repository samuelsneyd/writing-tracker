// import type { Config } from 'jest';

export const config = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@ui-kitten|aws-amplify|react-native-gifted-charts)/)',
    'amplify/#current-cloud-backend',
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  // transform: {},
  setupFiles: ['<rootDir>/jest.setup.js'],
};

// export default config;
