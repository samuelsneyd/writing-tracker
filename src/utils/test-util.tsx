import * as React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { themesMap } from '../themes';

export type TestingWrapperOptions = {
  store: MockStoreEnhanced<unknown, unknown>;
};

const ThemedWrapper = ({ children }: React.PropsWithChildren): React.ReactElement => {
  // Read theme from Redux, but use default values if none found
  const theme = useAppSelector(state => state.theme) ?? {
    colorMode: 'light',
    themeName: undefined,
    designSystem: 'eva',
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{
          ...eva[theme.colorMode],
          ...themesMap[theme.themeName],
        }}
      >
        {children}
      </ApplicationProvider>
    </>
  );
};

/**
 * Wraps a component with a mock Redux store and the Eva application provider.
 * Allows unit testing components that use Redux state and UI Kitten components.
 *
 * renderer.create(testingWrapper(<Component />, { store }));
 * @param component a React component that uses UI Kitten elements as children.
 * @param options store is required, others are optional.
 */
export const testingWrapper = (
  component: React.ReactElement,
  options: TestingWrapperOptions,
): React.ReactElement => (
  <Provider store={options.store}>
    <ThemedWrapper>
      {component}
    </ThemedWrapper>
  </Provider>
);

export const initialState: RootState = {
  _persist: { version: -1, rehydrated: true },
  awards: [],
  projects: [],
  sessions: [],
  theme: { colorMode: 'light', themeName: '', designSystem: 'eva' },
  settings: {
    notificationsEnabled: false,
    weekStartsOn: 0,
    tabBarIndicator: false,
  },
};
