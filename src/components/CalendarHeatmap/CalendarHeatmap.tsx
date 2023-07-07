import _ from 'lodash';
import * as React from 'react';
import { ScrollView, View } from 'react-native';
import Svg, { G, Rect, Text } from 'react-native-svg';
import { DAYS_IN_WEEK, MILLISECONDS_IN_ONE_DAY, MONTH_LABELS, SQUARE_SIZE } from './utils/constants';
import { convertToDate, shiftDate } from './utils/helpers';
import {
  getCountByDuplicateValues,
  getFillColor,
  getHeight,
  getMonthLabelCoordinates,
  getNumEmptyDaysAtStart,
  getSquareCoordinates,
  getStartDateWithEmptyDays,
  getTitleForIndex,
  getTooltipDataAttrsForIndex,
  getTransformForWeek,
  getWeekCount,
  getWidth,
} from './utils/utils';

const rectColor = ['#eeeeee', '#d6e685', '#8cc665', '#44a340', '#1e6823'];

// Array of objects with date and arbitrary metadata
type Values = { date: string | number | Date }[];

type CalendarHeatmapProps = {
  values: Values;
  // Number of days back from endDate to show
  numDays?: number;
  // End of date range
  endDate?: string | number | Date;
  // Size of space between squares
  gutterSize?: number;
  // Whether to orient horizontally or vertically
  horizontal?: boolean;
  // Whether to show month labels
  showMonthLabels?: boolean;
  // The color to show month labels
  monthLabelsColor?: string;
  // A function returning a custom component to render month labels
  monthLabelComponent?: (label: string) => React.ReactElement;
  // Whether to render squares for extra days in week after end date and before start date
  showOutOfRangeDays?: boolean;
  // Data attributes to add to square for setting 3rd party tooltips, e.g. { 'data-toggle': 'tooltip' } for bootstrap tooltips
  tooltipDataAttrs?: object | Function;
  // Function which returns title text for value
  titleForValue?: Function;
  // Callback function when a square is clicked
  onPress?: Function;
  // Array of colors to render the squares
  colorArray?: any[];
};

/**
 * A fork of react-native-calendar-heatmap with some changes.
 *
 * Changes: Convert to TypeScript. Fix undeclared variable bugs.
 * Add monthLabelComponent prop. Remove dead props. Tidy code and
 * comments. Make ScrollView scrollable.
 */
const CalendarHeatmap = (props: CalendarHeatmapProps) => {
  const {
    values,
    gutterSize = 1,
    horizontal = true,
    numDays = 200,
    endDate = new Date(),
    titleForValue,
    tooltipDataAttrs,
    onPress = () => undefined,
    showOutOfRangeDays = false,
    monthLabelsColor = 'black',
    monthLabelComponent = undefined,
    showMonthLabels = true,
    colorArray = rectColor,
  } = props;

  const scrollViewRef = React.useRef(null);

  React.useEffect(() => {
    // Scroll to the end when the component mounts
    // @ts-ignore
    scrollViewRef.current.scrollToEnd({ animated: false });
  }, []);

  const getValueCache = (values: Values) => {
    const countedArray = getCountByDuplicateValues(values);
    return _.reduce(
      values,
      (memo, value) => {
        const date = convertToDate(value.date);
        const index = Math.floor(
          // @ts-ignore
          (date - getStartDateWithEmptyDays(numDays, endDate)) /
          MILLISECONDS_IN_ONE_DAY,
        );
        // @ts-ignore
        memo[index] = {
          value: value,
        };
        // @ts-ignore
        memo[index].countedArray = _.find(countedArray, { key: memo[index].value.date });

        return memo;
      },
      {},
    );
  };

  React.useEffect(() => {
    setValueCache(getValueCache(values));
  }, []);

  const [valueCache, setValueCache] = React.useState(getValueCache(values));

  const handleClick = (value: any) => {
    if (onPress) {
      onPress(value);
    }
  };

  const renderSquare = (dayIndex: number, index: number) => {
    const indexOutOfRange =
      index < getNumEmptyDaysAtStart(numDays, endDate) ||
      index >= getNumEmptyDaysAtStart(numDays, endDate) + numDays;
    if (indexOutOfRange && !showOutOfRangeDays) {
      return null;
    }
    const [x, y] = getSquareCoordinates(dayIndex, horizontal, gutterSize);
    const fillColor = getFillColor(index, valueCache, colorArray);
    return (
      <Rect
        key={index}
        width={SQUARE_SIZE}
        height={SQUARE_SIZE}
        x={x}
        y={y}
        title={getTitleForIndex(index, valueCache, titleForValue)}
        onPress={() => handleClick(index)}
        fill={fillColor}
        {...getTooltipDataAttrsForIndex(index, valueCache, tooltipDataAttrs)}
      />
    );
  };

  const renderWeek = (weekIndex: number) => {
    const [x, y] = getTransformForWeek(weekIndex, horizontal, gutterSize, showMonthLabels);
    return (
      <G key={weekIndex} x={x} y={y}>
        {_.range(DAYS_IN_WEEK).map(dayIndex =>
          renderSquare(dayIndex, weekIndex * DAYS_IN_WEEK + dayIndex),
        )}
      </G>
    );
  };

  const renderAllWeeks = () => {
    return _.range(getWeekCount(numDays, endDate)).map(weekIndex =>
      renderWeek(weekIndex),
    );
  };

  const renderMonthLabels = () => {
    if (!showMonthLabels) {
      return null;
    }
    const weekRange = _.range(getWeekCount(numDays, endDate) - 1); // don't render for last week, because label will be cut off
    return weekRange.map(weekIndex => {
      const endOfWeek = shiftDate(
        getStartDateWithEmptyDays(numDays, endDate),
        (weekIndex + 1) * DAYS_IN_WEEK,
      );
      const [x, y] = getMonthLabelCoordinates(
        weekIndex,
        horizontal,
        gutterSize,
      );

      if (monthLabelComponent) {
        return endOfWeek.getDate() >= 1 && endOfWeek.getDate() <= DAYS_IN_WEEK ? (
          <View
            key={weekIndex}
            style={{
              position: 'absolute',
              left: horizontal ? x : undefined,
              // TODO - add vertical support
            }}
          >{monthLabelComponent(MONTH_LABELS[endOfWeek.getMonth()])}
          </View>
        ) : null;
      }

      return endOfWeek.getDate() >= 1 && endOfWeek.getDate() <= DAYS_IN_WEEK ? (
        <Text key={weekIndex} x={x} y={y + 16} stroke={monthLabelsColor}>
          {MONTH_LABELS[endOfWeek.getMonth()]}
        </Text>
      ) : null;
    });
  };

  return (
    <ScrollView
      horizontal={horizontal}
      ref={scrollViewRef}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {!!monthLabelComponent && renderMonthLabels()}
      <Svg
        height={getHeight(gutterSize, showMonthLabels, horizontal)}
        width={getWidth(numDays, endDate, gutterSize)}
      >
        <G>{!monthLabelComponent && renderMonthLabels()}</G>
        <G>{renderAllWeeks()}</G>
      </Svg>
    </ScrollView>
  );
};

export default CalendarHeatmap;
