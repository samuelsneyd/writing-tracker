import * as React from 'react';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { withAuthenticator } from 'aws-amplify-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import DrawerNavigator from './navigators/DrawerNavigator/DrawerNavigator';
import { useAppSelector } from './store/hooks';
import { themesMap } from './themes';
import { Provider } from 'react-redux';
import { store } from './store/store';

const ThemedContent = () => {
  const theme = useAppSelector(state => state.theme);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{
          ...eva[theme.colorMode],
          ...themesMap[theme.themeValue],
        }}
      >
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

const App = () => (
  <Provider store={store}>
    <ThemedContent />
  </Provider>
);

export default withAuthenticator(App);
