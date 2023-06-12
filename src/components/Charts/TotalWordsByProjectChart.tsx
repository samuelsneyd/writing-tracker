import * as React from 'react';
import _ from 'lodash';
import { EagerProject } from '../../models';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { BarDataItemType } from './chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

type Props = {
  eagerProjects: EagerProject[];
};

const TotalWordsByProjectChart = ({ eagerProjects }: Props): React.ReactElement => {
  const theme = useTheme();
  // Sum words of all sessions, grouped by project
  const barData: BarDataItemType[] = _(eagerProjects)
    .map((item): BarDataItemType => ({
      label: item.title,
      value: _.sumBy(item.sessions, 'words'),
      labelComponent: () => renderLabel(item.title),
    }))
    // Sort descending
    .sortBy('value')
    .reverse()
    .map((item, i): BarDataItemType => (
      theme.useRainbow
        ? {
          ...item,
          frontColor: theme[`color-rainbow-${i % Number.parseInt(theme.rainbowLength)}-500`],
          gradientColor: theme[`color-rainbow-${i % Number.parseInt(theme.rainbowLength)}-300`],
          showGradient: true,
        }
        : item
    ))
    .value();

  const maxValue = getMaxYAxisValue(barData);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue);

  return (
    <>
      <Text category="h6" appearance="hint">Total words by project</Text>
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
        renderTooltip={renderTooltip}
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

export default TotalWordsByProjectChart;
