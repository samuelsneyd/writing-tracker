import * as React from 'react';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { withAuthenticator } from 'aws-amplify-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import RootTabNavigator from './navigators/RootTabNavigator/RootTabNavigator';
import { cyanTheme } from './themes';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...cyanTheme }}>
        <NavigationContainer>
          <RootTabNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default withAuthenticator(App);
