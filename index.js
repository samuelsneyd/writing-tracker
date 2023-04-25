/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Amplify, Auth } from 'aws-amplify';
import awsmobile from './src/aws-exports'; // Amplify CLI

Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true
  }
});

AppRegistry.registerComponent(appName, () => App);
