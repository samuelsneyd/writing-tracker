import * as React from 'react';
import _ from 'lodash';
import { EagerProject } from '../../models';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { BarDataItemType } from './chart-types';
import { getMaxYAxisValue, getSteppedColors, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

type Props = {
  eagerProjects: EagerProject[];
};

const ProgressPercentageByProjectChart = ({ eagerProjects }: Props): React.ReactElement => {
  const theme = useTheme();

  // const getSteppedColors = (item: BarDataItemType, maxValue: number = 100) => {
  //   let colorStyle: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  //   if (item.value === undefined) {
  //     colorStyle = 'primary';
  //   } else if (item.value >= maxValue) {
  //     colorStyle = 'success';
  //   } else if (item.value >= (maxValue / 4) * 3) {
  //     colorStyle = 'primary';
  //   } else if (item.value >= maxValue / 2) {
  //     colorStyle = 'info';
  //   } else if (item.value >= maxValue / 4) {
  //     colorStyle = 'warning';
  //   } else {
  //     colorStyle = 'danger';
  //   }
  //
  //   return {
  //     frontColor: theme[`color-${colorStyle}-500`],
  //     gradientColor: theme[`color-${colorStyle}-300`],
  //     showGradient: true,
  //   };
  // };

  // Sum words of all sessions, grouped by project
  const barData: BarDataItemType[] = _(eagerProjects)
    .map((item): BarDataItemType => ({
      label: item.title,
      value: Math.min(
        (_.sumBy(item.sessions, 'words') + item.initialWords) / item.overallWordTarget * 100,
        100,
      ),
      labelComponent: () => renderLabel(item.title),
    }))
    // Sort descending
    .sortBy('value')
    .reverse()
    .map((item): BarDataItemType => ({
      ...item,
      ...getSteppedColors(item, theme, 100),
    }))
    .value();

  const maxValue = getMaxYAxisValue(barData, 100, 0);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue, '', '%');

  return (
    <>
      <Text category="h6" appearance="hint">Progress % by project</Text>
      <BarChart
        data={barData}
        frontColor={theme['color-primary-500']}
        gradientColor={theme['color-primary-300']}
        showGradient
        barBorderRadius={4}
        hideRules
        barWidth={80}
        spacing={15}
        initialSpacing={20}
        maxValue={maxValue}
        noOfSections={4}
        renderTooltip={(item: BarDataItemType) => renderTooltip(item, '', '%', 0)}
        yAxisLabelWidth={50}
        yAxisLabelTexts={yAxisLabelTexts}
        yAxisTextStyle={{ color: theme['text-hint-color'] }}
        yAxisColor={theme['text-hint-color']}
        xAxisColor={theme['text-hint-color']}
        xAxisLabelTextStyle={{ color: theme['text-hint-color'] }}
      />
    </>
  );
};

export default ProgressPercentageByProjectChart;
