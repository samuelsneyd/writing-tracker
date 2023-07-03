import { BarDataItemType } from '../chart-types';
import { getMaxYAxisValue, renderLabel, renderTooltip } from '../chart-utils';

describe('renderTooltip', () => {
  const mockItem: BarDataItemType = {
    value: 10,
  };
  const mockItemFloat = {
    value: Math.PI,
  };
  const mockItemLarge = {
    value: 1000,
  };
  const mockItemUndefined = {
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
