import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { useAppSelector } from '../../../store/hooks';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import type { BarChartProps, BarDataItemType } from '../chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from '../chart-utils';

export const TotalWordsByProject = (props: BarChartProps): React.ReactElement => {
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
      value: _.sumBy(item.sessions, 'words') + item.initialWords,
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

  const totalWords = Math.round(_(barData).sumBy('value'));
  const averageWordsByProject = Math.round(_(barData).meanBy('value'));

  const maxValue = getMaxYAxisValue(barData, 2000, 2000);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue);

  return (
    <>
      {showTitle && <Text category="h6" appearance="hint">Total words by project</Text>}
      <ChartAggregateHeader
        aggregateText="total"
        value={totalWords}
        valueText="words"
        intervalText={`${averageWordsByProject.toLocaleString()} average`}
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
          renderTooltip={(item: BarDataItemType) => renderTooltip(item)}
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
