import * as React from 'react';
import _ from 'lodash';
import { ThemeType } from '@ui-kitten/components';
import { BarDataItemType } from '../../components/Charts/chart-types';

/**
 * Returns a memoized barData array with custom themes applied. Will re-create
 * when barData or theme changes.
 * @param barData an array of barData.
 * @param theme the current UI Kitten theme.
 * @param iterateOn optional, if selected will iterate over colors based on a value on each data value.
 * If nothing is selected, it will iterate on the index.
 */
const useThemedBarData = (
  barData: BarDataItemType[],
  theme: ThemeType,
  iterateOn?: string,
): BarDataItemType[] => React.useMemo(() => {
  if (theme.useRainbow) {
    return _.map(barData, (item, i) => ({
      ...item,
      frontColor: theme[`color-rainbow-${(iterateOn ? item[iterateOn] : i) % Number.parseInt(theme.rainbowLength)}-500`],
      gradientColor: theme[`color-rainbow-${(iterateOn ? item[iterateOn] : i) % Number.parseInt(theme.rainbowLength)}-300`],
      showGradient: true,
    }));
  }

  return barData;
}, [barData, theme]);

export default useThemedBarData;
