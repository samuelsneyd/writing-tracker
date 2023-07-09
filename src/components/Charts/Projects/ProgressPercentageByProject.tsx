import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { useAppSelector } from '../../../store/hooks';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import type { BarChartProps, BarDataItemType } from '../chart-types';
import { getMaxYAxisValue, getSteppedColors, getYAxisLabelTexts, renderLabel, renderTooltip } from '../chart-utils';

export const ProgressPercentageByProject = (props: BarChartProps): React.ReactElement => {
  const { showTitle = true, barChartContainerStyle = undefined } = props;
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
      {showTitle && <Text category="h6" appearance="hint">Progress % by project</Text>}
      <ChartAggregateHeader
        aggregateText="total"
        value={totalProjects}
        valueText="projects"
        intervalText={`${completedProjects.toLocaleString()} completed`}
        showNavButtons={false}
      />
      <Layout style={barChartContainerStyle || styles.defaultBarChartContainer}>
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
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  defaultBarChartContainer: {
    width: '100%',
  },
});
