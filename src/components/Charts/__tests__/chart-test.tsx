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
} from '../../Charts';

describe('ProgressPercentageByProject', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<ProgressPercentageByProject />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const theme = 'rainbowTheme';
    renderer.create(testingWrapper(<ProgressPercentageByProject />, { store, theme }));
  });
});

describe('TotalTimeByProject', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<TotalTimeByProject />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const theme = 'rainbowTheme';
    renderer.create(testingWrapper(<TotalTimeByProject />, { store, theme }));
  });
});

describe('TotalWordsByDay', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<TotalWordsByDay />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const theme = 'rainbowTheme';
    renderer.create(testingWrapper(<TotalWordsByDay />, { store, theme }));
  });
});

describe('TotalWordsByProject', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<TotalWordsByProject />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const theme = 'rainbowTheme';
    renderer.create(testingWrapper(<TotalWordsByProject />, { store, theme }));
  });
});

describe('WordsWritten6Month', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<WordsWritten6Month />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const theme = 'rainbowTheme';
    renderer.create(testingWrapper(<WordsWritten6Month />, { store, theme }));
  });
});

describe('WordsWrittenMonth', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<WordsWrittenMonth />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const theme = 'rainbowTheme';
    renderer.create(testingWrapper(<WordsWrittenMonth />, { store, theme }));
  });
});

describe('WordsWrittenWeek', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<WordsWrittenWeek />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const theme = 'rainbowTheme';
    renderer.create(testingWrapper(<WordsWrittenWeek />, { store, theme }));
  });
});

describe('WordsWrittenYear', () => {
  const initialState = { projects: [], sessions: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    renderer.create(testingWrapper(<WordsWrittenYear />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const theme = 'rainbowTheme';
    renderer.create(testingWrapper(<WordsWrittenYear />, { store, theme }));
  });
});
