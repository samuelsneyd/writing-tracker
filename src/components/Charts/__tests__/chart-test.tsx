import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { initialState, testingWrapper } from '../../../utils/test-util';
import {
  ProgressPercentageByProject,
  SessionHeatmap,
  TimeIntervalDay,
  TimeIntervalWeek,
  TimeIntervalMonth,
  TimeInterval6Month,
  TimeIntervalYear,
  TimeIntervalChartGroup,
  TotalTimeByProject,
  TotalWordsByDay,
  TotalWordsByProject,
  WordsIntervalDay,
  WordsIntervalWeek,
  WordsIntervalMonth,
  WordsInterval6Month,
  WordsIntervalYear,
  WordsIntervalChartGroup,
} from '../../Charts';

const mockStore = configureStore();
const rainbowTheme = { colorMode: 'light', themeValue: 'rainbowTheme', designSystem: 'eva' };

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

describe('TimeIntervalDay', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<TimeIntervalDay />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<TimeIntervalDay />, { store }));
  });
});

describe('TimeIntervalWeek', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<TimeIntervalWeek />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<TimeIntervalWeek />, { store }));
  });
});

describe('TimeIntervalMonth', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<TimeIntervalMonth />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<TimeIntervalMonth />, { store }));
  });
});

describe('TimeInterval6Month', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<TimeInterval6Month />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<TimeInterval6Month />, { store }));
  });
});

describe('TimeIntervalYear', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<TimeIntervalYear />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<TimeIntervalYear />, { store }));
  });
});

describe('TimeIntervalChartGroup', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<TimeIntervalChartGroup />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<TimeIntervalChartGroup />, { store }));
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

describe('WordsIntervalChartGroup', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<WordsIntervalChartGroup />, { store }));
  });

  it('renders correctly with rainbow theme', () => {
    const store = mockStore({ ...initialState, theme: rainbowTheme });
    renderer.create(testingWrapper(<WordsIntervalChartGroup />, { store }));
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
