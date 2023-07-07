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
  WordsWritten6Month,
  WordsWrittenMonth,
  WordsWrittenWeek,
  WordsWrittenYear,
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

describe('WordsWritten6Month', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<WordsWritten6Month />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<WordsWritten6Month />, { store }));
  });
});

describe('WordsWrittenMonth', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<WordsWrittenMonth />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<WordsWrittenMonth />, { store }));
  });
});

describe('WordsWrittenWeek', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<WordsWrittenWeek />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<WordsWrittenWeek />, { store }));
  });
});

describe('WordsWrittenYear', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<WordsWrittenYear />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<WordsWrittenYear />, { store }));
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
