import * as React from 'react';
import _ from 'lodash';
import { ThemeType } from '@ui-kitten/components';
import { BarDataItemType } from '../../components/Charts/chart-types';
import { getSteppedColors } from '../../components/Charts/chart-utils';

/**
 * Returns a memoized barData array with custom themes applied with stepped
 * values. Will re-create when barData or theme changes.
 * @param barData an array of barData.
 * @param theme the current UI Kitten theme.
 * @param maxValue the max value for getting stepped colors.
 */
const useThemedBarDataStepped = (
  barData: BarDataItemType[],
  theme: ThemeType,
  maxValue?: number,
): BarDataItemType[] => React.useMemo(() => {
  return _.map(barData, (item) => ({
    ...item,
    ...getSteppedColors(item, theme, maxValue),
  }));
}, [barData, theme]);

export default useThemedBarDataStepped;
