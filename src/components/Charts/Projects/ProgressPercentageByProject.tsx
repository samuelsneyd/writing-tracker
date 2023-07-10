import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import useThemedBarDataStepped from '../../../hooks/useThemedBarData/useThemedBarDataStepped';
import { useAppSelector } from '../../../store/hooks';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import { defaultChartStyles } from '../chart-styles';
import type { ChartProps, BarDataItemType } from '../chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from '../chart-utils';

export const ProgressPercentageByProject = (props: ChartProps): React.ReactElement => {
  const { showTitle = true, chartContainerStyle = defaultChartStyles.chartContainer } = props;
  const theme = useTheme();
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);

  // Group sessions by projects
  const groupedSessions = React.useMemo(
    () => _.groupBy(reduxSessions, 'projectSessionsId'),
    [reduxSessions],
  );

  // Sum words of all sessions, grouped by project
  const barData = React.useMemo(
    () => _(reduxProjects)
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
      .value(),
    [reduxProjects, groupedSessions],
  );

  const themedBarData = useThemedBarDataStepped(barData, theme, 100);

  const totalProjects = barData.length;
  const completedProjects = React.useMemo(
    () => barData.filter(data => data.value === 100).length,
    [barData],
  );

  const maxValue = React.useMemo(() => getMaxYAxisValue(barData, 100, 0), [barData]);
  const yAxisLabelTexts = React.useMemo(
    () => getYAxisLabelTexts(maxValue, 4, '', '%'),
    [maxValue],
  );

  return (
    <>
      {showTitle && <Text category="h6" appearance="hint">Progress % by project</Text>}
      <ChartAggregateHeader
        aggregateText="total"
        value={totalProjects}
        valueText="projects"
        intervalText={`${completedProjects.toLocaleString()} completed`}
        showNavButtons={false}
      />
      <Layout style={chartContainerStyle}>
        <BarChart
          data={themedBarData}
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
      </Layout>
    </>
  );
};
