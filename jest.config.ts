import type { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@ui-kitten)/)',
    'amplify/#current-cloud-backend'
  ],
};

export default config;
