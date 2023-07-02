import * as React from 'react';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { withAuthenticator } from 'aws-amplify-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import RootTabNavigator from './navigators/RootTabNavigator/RootTabNavigator';
import { useAppSelector } from './store/hooks';
import { cyanTheme, rainbowTheme } from './themes';
import { Provider } from 'react-redux';
import { store } from './store/store';
import useLoginStreak from './hooks/useLoginStreak/useLoginStreak';

type ReduxProviderProps = {
  children?: JSX.Element;
};

const ReduxProvider = ({ children }: ReduxProviderProps) => (
  <Provider store={store}>
    {children}
  </Provider>
);

const ThemedContent = () => {
  const theme = useAppSelector(state => state.theme).value;
  useLoginStreak();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva[theme], ...rainbowTheme }}>
        <NavigationContainer>
          <RootTabNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

const App = () => (
  <ReduxProvider>
    <ThemedContent />
  </ReduxProvider>
);

export default withAuthenticator(App);
