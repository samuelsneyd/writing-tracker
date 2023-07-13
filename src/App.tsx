import * as React from 'react';
import * as eva from '@eva-design/eva';
import * as material from '@eva-design/material';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { withAuthenticator } from 'aws-amplify-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import DrawerNavigator from './navigators/DrawerNavigator/DrawerNavigator';
import { useAppSelector } from './store/hooks';
import { themesMap } from './themes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';

const ThemedContent = (): React.ReactElement => {
  // The theme is persisted between app loads with redux-persist
  const theme = useAppSelector(state => state.theme);
  // App requires restart on design system change
  const designSystem = theme.designSystem === 'material' ? material : eva;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...designSystem}
        theme={{
          ...designSystem[theme.colorMode],
          ...themesMap[theme.themeName],
        }}
      >
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

const App = (): React.ReactElement => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemedContent />
    </PersistGate>
  </Provider>
);

export default withAuthenticator(App);
