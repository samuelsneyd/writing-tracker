import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { testingWrapper } from '../../../utils/test-util';
import {
  ProgressPercentageByProject,
  TotalTimeByProject,
  TotalWordsByDay,
  TotalWordsByProject,
  WordsIntervalDay,
  WordsIntervalWeek,
  WordsIntervalMonth,
  WordsInterval6Month,
  WordsIntervalYear,
  SessionHeatmap,
} from '../../Charts';

const mockStore = configureStore();
const initialState = {
  projects: [],
  sessions: [],
  theme: { colorMode: 'light', themeValue: undefined },
};
const rainbowTheme = { colorMode: 'light', themeValue: 'rainbowTheme' };

describe('ProgressPercentageByProject', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<ProgressPercentageByProject />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<ProgressPercentageByProject />, { store }));
  });
});

describe('TotalTimeByProject', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<TotalTimeByProject />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<TotalTimeByProject />, { store }));
  });
});

describe('TotalWordsByDay', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<TotalWordsByDay />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<TotalWordsByDay />, { store }));
  });
});

describe('TotalWordsByProject', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<TotalWordsByProject />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<TotalWordsByProject />, { store }));
  });
});

describe('WordsIntervalDay', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<WordsIntervalDay />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<WordsIntervalDay />, { store }));
  });
});

describe('WordsInterval6Month', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<WordsInterval6Month />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<WordsInterval6Month />, { store }));
  });
});

describe('WordsIntervalMonth', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<WordsIntervalMonth />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<WordsIntervalMonth />, { store }));
  });
});

describe('WordsIntervalWeek', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<WordsIntervalWeek />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<WordsIntervalWeek />, { store }));
  });
});

describe('WordsIntervalYear', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<WordsIntervalYear />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<WordsIntervalYear />, { store }));
  });
});

describe('SessionHeatmap', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<SessionHeatmap />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<SessionHeatmap />, { store }));
  });
});
