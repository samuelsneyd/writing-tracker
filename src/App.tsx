import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>Hello there.</Text>
      </View>
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
