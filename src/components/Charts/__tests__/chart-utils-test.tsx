import { BarDataItemType } from '../chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from '../chart-utils';

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
