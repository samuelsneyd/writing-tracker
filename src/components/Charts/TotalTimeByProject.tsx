import * as React from 'react';
import _ from 'lodash';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { useAppSelector } from '../../store/hooks';
import { BarDataItemType } from './chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

export const TotalTimeByProject = (): React.ReactElement => {
  const theme = useTheme();
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);

  // Group sessions by projects
  const groupedSessions = _.groupBy(reduxSessions, 'projectSessionsId');

  // Sum words of all sessions, grouped by project
  const barData: BarDataItemType[] = _(reduxProjects)
    .mapValues((project) => ({
      ...project,
      sessions: groupedSessions[project.id] ?? [],
    }))
    .map((item): BarDataItemType => ({
      label: item.title,
      value: _.sumBy(item.sessions, 'minutes'),
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

  const totalHours = (_(barData).sumBy('value') / 60).toFixed(2);

  const maxValue = getMaxYAxisValue(barData, 10 * 60, 10 * 60);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue, 4, '', 'h', 1 / 60);

  return (
    <>
      <Text category="h6" appearance="hint">Total time by project</Text>
      <Text category="s1" appearance="hint">Total: {totalHours.toLocaleString()} hours</Text>
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
        renderTooltip={(item: BarDataItemType) => renderTooltip(item, '', 'h', 2, 1 / 60)}
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
