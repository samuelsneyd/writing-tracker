import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { useAppSelector } from '../../../store/hooks';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import { defaultChartStyles } from '../chart-styles';
import type { ChartProps, BarDataItemType } from '../chart-types';
import {
  formatMinutesAsHourMinutes,
  getMaxYAxisValue,
  getYAxisLabelTexts,
  renderLabel,
  renderTooltip,
} from '../chart-utils';

export const TotalTimeByProject = (props: ChartProps): React.ReactElement => {
  const { showTitle = true, chartContainerStyle = defaultChartStyles.chartContainer } = props;
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

  // Total of all minutes
  const totalMinutes = (_(barData).sumBy('value')) || 0;
  const formattedTotal = formatMinutesAsHourMinutes(totalMinutes);
  const averageMinutes = Math.round((_(barData).meanBy('value'))) || 0;
  const formattedAverage = formatMinutesAsHourMinutes(averageMinutes);

  const maxValue = getMaxYAxisValue(barData, 2 * 60, 2 * 60);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue, 4, '', 'h', 1 / 60);

  return (
    <>
      {showTitle && <Text category="h6" appearance="hint">Total time by project</Text>}
      <ChartAggregateHeader
        aggregateText="total"
        value={formattedTotal}
        valueText=""
        intervalText={`${formattedAverage} average`}
        showNavButtons={false}
      />
      <Layout style={chartContainerStyle}>
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
      </Layout>
    </>
  );
};
