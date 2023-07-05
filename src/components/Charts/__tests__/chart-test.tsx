import 'react-native';
import * as React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import {
  ProgressPercentageByProject,
  TotalTimeByProject,
  TotalWordsByDay,
  TotalWordsByProject,
  WordsWritten6Month,
  WordsWrittenMonth,
  WordsWrittenWeek,
  WordsWrittenYear,
} from '../../Charts';

/**
 * Wraps a component with a mock Redux store and the Eva application provider.
 * @param component a React component that uses UI Kitten elements as children.
 * @param store the mock redux store.
 */
const testingWrapper = (
  component: React.ReactElement,
  store: MockStoreEnhanced<unknown, unknown>,
): React.ReactElement => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      {component}
    </ApplicationProvider>
  </Provider>
);

describe('ProgressPercentageByProject', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <ProgressPercentageByProject />
        </ApplicationProvider>
      </Provider>,
    );
  });
});

describe('TotalTimeByProject', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<TotalTimeByProject />, store));
  });
});

describe('TotalWordsByDay', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<TotalWordsByDay />, store));
  });
});

describe('TotalWordsByProject', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<TotalWordsByProject />, store));
  });
});

describe('WordsWritten6Month', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<WordsWritten6Month />, store));
  });
});

describe('WordsWrittenMonth', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<WordsWrittenMonth />, store));
  });
});

describe('WordsWrittenWeek', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<WordsWrittenWeek />, store));
  });
});

describe('WordsWrittenYear', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<WordsWrittenYear />, store));
  });
});
