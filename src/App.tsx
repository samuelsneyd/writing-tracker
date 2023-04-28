import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { withAuthenticator } from 'aws-amplify-react-native';
import RootTabNavigator from './navigators/RootTabNavigator/RootTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootTabNavigator />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
