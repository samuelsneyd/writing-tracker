import type { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/'
    + '(?!('
    + 'react-native'
    + '|@react-native'
    + '|@react-navigation'
    + '|@ui-kitten'
    + '|aws-amplify'
    + '|aws-amplify-react-native'
    + '|react-native-gifted-charts'
    + '|react-native-linear-gradient'
    + '|@aws-sdk'
    + '|uuid/dist/esm-browser'
    + ')/)',
    'amplify/#current-cloud-backend',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
};

export default config;
