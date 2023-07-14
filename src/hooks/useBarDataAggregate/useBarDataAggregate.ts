import * as React from 'react';
import _ from 'lodash';
import { BarDataItemType } from '../../components/Charts/chart-types';

export type BarDataAggregate = {
  average: number;
  total: number;
};

type BarDataAggregateOptions = {
  iteratee?: string;
  filterPredicate?: _.ObjectIterateeCustom<BarDataItemType[], boolean> | undefined | null;
};

/**
 * Get memoized aggregates (average and total) from a bar data array.
 * By default, it calculates based on truthy values only. This can be
 * changed by supplying a filterPredicate callback.
 *
 * @param barData an array of bar data to get aggregates from, memoized.
 * @param options customize the iteratee or the filter predicate.
 */
const useBarDataAggregate = (
  barData: BarDataItemType[],
  options: BarDataAggregateOptions = {},
): BarDataAggregate => React.useMemo(
  () => {
    const {
      iteratee = 'value',
      filterPredicate = (data: BarDataItemType) => data.value,
    } = options;

    const filteredData = filterPredicate ? _.filter(barData, filterPredicate) : barData;
    const total = Math.round(_.sumBy(filteredData, iteratee)) || 0;
    const average = Math.round(total / filteredData.length) || 0;

    return { average, total };
  },
  [barData],
);

export default useBarDataAggregate;
