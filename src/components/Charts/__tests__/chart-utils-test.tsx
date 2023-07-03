import { BarDataItemType } from '../chart-types';
import { getMaxYAxisValue, getSteppedColors, getYAxisLabelTexts, renderLabel, renderTooltip } from '../chart-utils';
import mock = jest.mock;

describe('renderTooltip', () => {
  const mockItem: BarDataItemType = {
    value: 10,
  };
  const mockItemFloat: BarDataItemType = {
    value: Math.PI,
  };
  const mockItemLarge: BarDataItemType = {
    value: 1000,
  };
  const mockItemUndefined: BarDataItemType = {
    value: undefined,
  };

  it('renders tooltip with default parameters', () => {
    const children = renderTooltip(mockItem).props.children;
    const expectedChildren = ['', '10', ''];

    expect(children).toEqual(expectedChildren);
  });

  it('renders tooltip with prefix and suffix', () => {
    const prefix = '-';
    const suffix = '%';
    const children = renderTooltip(mockItem, prefix, suffix).props.children;
    const expectedChildren = [prefix, '10', suffix];

    expect(children).toEqual(expectedChildren);
  });

  it('renders tooltip with fraction digits', () => {
    const children = renderTooltip(mockItemFloat, '', '', 2).props.children;
    const expectedChildren = ['', '3.14', ''];

    expect(children).toEqual(expectedChildren);
  });

  it('renders tooltip with no fraction digits', () => {
    const children = renderTooltip(mockItemFloat, '', '', 0).props.children;
    const expectedChildren = ['', '3', ''];

    expect(children).toEqual(expectedChildren);
  });

  it('renders tooltip using locale strings', () => {
    const children = renderTooltip(mockItemLarge).props.children;
    const expectedChildren = ['', '1,000', ''];

    expect(children).toEqual(expectedChildren);
  });

  it('renders tooltip with empty string if undefined value', () => {
    const children = renderTooltip(mockItemUndefined).props.children;
    const expectedChildren = ['', '', ''];

    expect(children).toEqual(expectedChildren);
  });

  it('renders tooltip applying offset', () => {
    const children = renderTooltip(mockItem, '', '', 0, 2).props.children;
    const expectedChildren = ['', '20', ''];

    expect(children).toEqual(expectedChildren);
  });
});

describe('renderLabel', () => {
  const mockLabel = 'Label';
  const mockLabelUndefined = undefined;

  it('renders label', () => {
    const children = renderLabel(mockLabel).props.children;

    expect(children).toEqual(mockLabel);
  });

  it('renders empty label if label is undefined', () => {
    const children = renderLabel(mockLabelUndefined).props.children;

    expect(children).toBeUndefined();
  });
});

describe('getMaxYAxisValue', () => {
  const mockBarData: BarDataItemType[] = [{ value: 10 }, { value: 20 }, { value: 30 }];
  const mockBarDataAboveMax: BarDataItemType[] = [{ value: 999 }, { value: 1000 }, { value: 1001 }];
  const defaultMax = 1000;
  const defaultStep = 1000;
  const customMax = 100;
  const customStep = 100;

  it('uses the default max', () => {
    const value = getMaxYAxisValue(mockBarData);

    expect(value).toEqual(defaultMax);
  });

  it('uses the default step value when above max', () => {
    const value = getMaxYAxisValue(mockBarDataAboveMax);

    expect(value).toEqual(defaultMax + defaultStep);
  });

  it('uses a custom max', () => {
    const value = getMaxYAxisValue(mockBarData, customMax, customStep);

    expect(value).toEqual(customMax);
  });

  it('uses a custom step value', () => {
    const value = getMaxYAxisValue(mockBarDataAboveMax, defaultMax, customStep);

    expect(value).toEqual(defaultMax + customStep);
  });

  it('uses a custom max and custom step value', () => {
    const value = getMaxYAxisValue(mockBarData.concat([{ value: customMax + 1 }]), customMax, customStep);

    expect(value).toEqual(customMax + customStep);
  });

  it('applies offset', () => {
    const customOffset = 2;
    const valueA = getMaxYAxisValue(mockBarDataAboveMax, defaultMax, defaultStep, customOffset);

    expect(valueA).toEqual(defaultMax + defaultStep * customOffset);
  });
});

describe('getYAxisLabelTexts', () => {
  const maxYAxisValue = 1000;
  const defaultStepCount = 4;
  const customStepCount = 10;
  const defaultKLimit = 10000;

  it('should return default labels', () => {
    const labels = getYAxisLabelTexts(maxYAxisValue);
    const expectedLabels = ['0', '250', '500', '750', '1,000'];

    expect(labels).toHaveLength(defaultStepCount + 1);
    expect(labels).toEqual(expectedLabels);
  });

  it('should return labels with custom step counts', () => {
    const labels = getYAxisLabelTexts(maxYAxisValue, customStepCount);
    const expectedLabels = ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1,000'];

    expect(labels).toHaveLength(customStepCount + 1);
    expect(labels).toEqual(expectedLabels);
  });

  it('should apply prefix and suffix', () => {
    const prefix = '-';
    const suffix = '%';
    const labels = getYAxisLabelTexts(maxYAxisValue, defaultStepCount, prefix, suffix);
    const expectedLabels = ['-0%', '-250%', '-500%', '-750%', '-1,000%'];

    expect(labels).toEqual(expectedLabels);
  });

  it('should apply offset', () => {
    const customOffset = 2;
    const labels = getYAxisLabelTexts(maxYAxisValue, defaultStepCount, '', '', customOffset);
    const expectedLabels = ['0', '500', '1,000', '1,500', '2,000'];

    expect(labels).toEqual(expectedLabels);
  });

  it('should use default kLimit', () => {
    const belowKLimit = defaultKLimit - 1000;
    const atKLimit = defaultKLimit;
    const aboveKLimit = defaultKLimit + 1000;
    const labelsBelowKLimit = getYAxisLabelTexts(belowKLimit);
    const labelsAtKLimit = getYAxisLabelTexts(atKLimit);
    const labelsAboveKLimit = getYAxisLabelTexts(aboveKLimit);
    const expectedLabelsBelowKLimit = ['0', '2,250', '4,500', '6,750', '9,000'];
    const expectedLabelsAtKLimit = ['0', '2.5K', '5K', '7.5K', '10K'];
    const expectedLabelsAboveKLimit = ['0', '2.75K', '5.5K', '8.25K', '11K'];

    expect(labelsBelowKLimit).toEqual(expectedLabelsBelowKLimit);
    expect(labelsAtKLimit).toEqual(expectedLabelsAtKLimit);
    expect(labelsAboveKLimit).toEqual(expectedLabelsAboveKLimit);
  });

  it('should use a custom kLimit if set', () => {
    const customKLimit = 100000;
    const belowKLimit = customKLimit - 10000;
    const atKLimit = customKLimit;
    const aboveKLimit = customKLimit + 10000;
    const labelsBelowKLimit = getYAxisLabelTexts(belowKLimit, defaultStepCount, '', '', 1, customKLimit);
    const labelsAtKLimit = getYAxisLabelTexts(atKLimit, defaultStepCount, '', '', 1, customKLimit);
    const labelsAboveKLimit = getYAxisLabelTexts(aboveKLimit, defaultStepCount, '', '', 1, customKLimit);
    const expectedLabelsBelowKLimit = ['0', '22,500', '45,000', '67,500', '90,000'];
    const expectedLabelsAtKLimit = ['0', '25K', '50K', '75K', '100K'];
    const expectedLabelsAboveKLimit = ['0', '27.5K', '55K', '82.5K', '110K'];

    expect(labelsBelowKLimit).toEqual(expectedLabelsBelowKLimit);
    expect(labelsAtKLimit).toEqual(expectedLabelsAtKLimit);
    expect(labelsAboveKLimit).toEqual(expectedLabelsAboveKLimit);
  });
});

describe('getSteppedColors', () => {
  const defaultMaxValue = 100;
  const customMaxValue = 1000;
  const mockTheme = {
    'color-primary-100': '#D5FDF3',
    'color-primary-200': '#ACFCED',
    'color-primary-300': '#81F6EA',
    'color-primary-400': '#61EDEB',
    'color-primary-500': '#30D6E2',
    'color-primary-600': '#23AAC2',
    'color-primary-700': '#1882A2',
    'color-primary-800': '#0F5E83',
    'color-primary-900': '#09446C',
    'color-success-100': '#E1FBD7',
    'color-success-200': '#BDF7B1',
    'color-success-300': '#8EE985',
    'color-success-400': '#62D363',
    'color-success-500': '#35B742',
    'color-success-600': '#269D3D',
    'color-success-700': '#1A8338',
    'color-success-800': '#106A32',
    'color-success-900': '#0A572E',
    'color-info-100': '#D4E9FE',
    'color-info-200': '#ABD1FE',
    'color-info-300': '#80B5FE',
    'color-info-400': '#619DFD',
    'color-info-500': '#2D75FC',
    'color-info-600': '#205AD8',
    'color-info-700': '#1642B5',
    'color-info-800': '#0E2E92',
    'color-info-900': '#081F78',
    'color-warning-100': '#FFFDCD',
    'color-warning-200': '#FFFA9B',
    'color-warning-300': '#FFF66A',
    'color-warning-400': '#FFF345',
    'color-warning-500': '#FFEE07',
    'color-warning-600': '#DBCB05',
    'color-warning-700': '#B7A803',
    'color-warning-800': '#938602',
    'color-warning-900': '#7A6E01',
    'color-danger-100': '#FFE4D9',
    'color-danger-200': '#FFC2B3',
    'color-danger-300': '#FF9A8D',
    'color-danger-400': '#FF7471',
    'color-danger-500': '#FF424E',
    'color-danger-600': '#DB304A',
    'color-danger-700': '#B72145',
    'color-danger-800': '#93153F',
    'color-danger-900': '#7A0C3B',
  };

  it('should return primary color on undefined or null value', () => {
    // @ts-ignore
    const values: BarDataItemType[] = [{ value: undefined }, { value: null }];
    const steppedColors = values.map(ele => getSteppedColors(ele, mockTheme));

    steppedColors.forEach(color => {
      expect(color).toEqual({
        frontColor: mockTheme['color-primary-500'],
        gradientColor: mockTheme['color-primary-300'],
        showGradient: true,
      });
    });
  });

  it('should return stepped colors', () => {
    const values: BarDataItemType[] = [
      { value: -1 },
      { value: 0 },
      { value: 24 },
      { value: 25 },
      { value: 26 },
      { value: 49 },
      { value: 50 },
      { value: 51 },
      { value: 74 },
      { value: 75 },
      { value: 76 },
      { value: 99 },
      { value: 100 },
      { value: 101 },
    ];

    const expected: ('primary' | 'success' | 'info' | 'warning' | 'danger')[] = [
      'danger',
      'danger',
      'danger',
      'warning',
      'warning',
      'warning',
      'info',
      'info',
      'info',
      'primary',
      'primary',
      'primary',
      'success',
      'success',
    ];

    const steppedColors = values.map(ele => getSteppedColors(ele, mockTheme));

    steppedColors.forEach((color, i) => {
      expect(color).toEqual({
        frontColor: mockTheme[`color-${expected[i]}-500`],
        gradientColor: mockTheme[`color-${expected[i]}-300`],
        showGradient: true,
      });
    });
  });
});
