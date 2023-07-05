import * as React from 'react';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { withAuthenticator } from 'aws-amplify-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import RootTabNavigator from './navigators/RootTabNavigator/RootTabNavigator';
import { useAppSelector } from './store/hooks';
import { themesMap } from './themes';
import { Provider } from 'react-redux';
import { store } from './store/store';
import useLoginStreak from './hooks/useLoginStreak/useLoginStreak';

const ThemedContent = () => {
  const theme = useAppSelector(state => state.theme);

  useLoginStreak();

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
          <RootTabNavigator />
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
