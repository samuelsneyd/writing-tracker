import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { initialState, testingWrapper } from '../../../utils/test-util';
import AnimatedTabIndicatorToggle from '../AnimatedTabIndicatorToggle';
import NotificationsToggle from '../NotificationsToggle';
import WeekStartsOnRadioButtonGroup from '../WeekStartsOnRadioButtonGroup';

const mockStore = configureStore();

describe('AnimatedTabIndicatorToggle', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<AnimatedTabIndicatorToggle />, { store }));
  });
});

describe('NotificationsToggle', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<NotificationsToggle />, { store }));
  });
});

describe('WeekStartsOnRadioButtonGroup', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    renderer.create(testingWrapper(<WeekStartsOnRadioButtonGroup />, { store }));
  });
});
