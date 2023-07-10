import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Amplify, DataStore } from 'aws-amplify';
import awsmobile from './src/aws-exports'; // Amplify CLI
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter';
import 'core-js/full/symbol/async-iterator';

// DEBUG, INFO, WARN, ERROR, VERBOSE
// window.LOG_LEVEL = '';

Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  },
});

DataStore.configure({
  // SQLite adapter promises improved local performance
  storageAdapter: SQLiteAdapter,
});

AppRegistry.registerComponent(appName, () => App);
