import * as React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';
import { themesMap } from '../themes';

export type TestingWrapperOptions = {
  store: MockStoreEnhanced<unknown, unknown>,
  theme?: string;
};

/**
 * Wraps a component with a mock Redux store and the Eva application provider.
 * Allows unit testing components that use Redux state and UI Kitten components.
 *
 * renderer.create(testingWrapper(<Component />, store));
 * @param component a React component that uses UI Kitten elements as children.
 * @param options store is required, others are optional.
 */
export const testingWrapper = (
  component: React.ReactElement,
  options: TestingWrapperOptions,
): React.ReactElement => (
  <Provider store={options.store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider
      {...eva}
      theme={{
        ...eva.light,
        ...(options.theme && themesMap[options.theme]),
      }}
    >
      {component}
    </ApplicationProvider>
  </Provider>
);
