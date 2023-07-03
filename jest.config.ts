import type { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@ui-kitten|aws-amplify)/)',
    'amplify/#current-cloud-backend',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
};

export default config;
