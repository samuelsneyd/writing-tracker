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
    renderer.create(testingWrapper(<ProgressPercentageByProject />, store));
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
