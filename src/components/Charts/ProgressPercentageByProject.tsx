import * as React from 'react';
import _ from 'lodash';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { useAppSelector } from '../../store/hooks';
import { BarDataItemType } from './chart-types';
import { getMaxYAxisValue, getSteppedColors, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

export const ProgressPercentageByProject = (): React.ReactElement => {
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

  const totalProjects = barData.length;
  const completedProjects = barData.filter(data => data.value === 100).length;

  const maxValue = getMaxYAxisValue(barData, 100, 0);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue, 4, '', '%');

  return (
    <>
      <Text category="h6" appearance="hint">Progress % by project</Text>
      <Text category="s1" appearance="hint">
        {totalProjects.toLocaleString()} projects | {completedProjects.toLocaleString()} completed
      </Text>
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
