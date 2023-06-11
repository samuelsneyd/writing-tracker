import { DataStore } from 'aws-amplify';
import * as React from 'react';
import _ from 'lodash';
import { Project, Session } from '../../models';
import { Text, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';
import { BarDataItemType } from './chart-types';
import { getMaxYAxisValue, getYAxisLabelTexts, renderLabel, renderTooltip } from './chart-utils';

type Props = {
  sessions: Session[];
  projects: Project[];
};

const TotalWordsByProjectChart = ({ projects }: Props): React.ReactElement => {
  const [barData, setBarData] = React.useState<BarDataItemType[]>([]);
  const theme = useTheme();
  const maxValue = getMaxYAxisValue(barData);
  const yAxisLabelTexts = getYAxisLabelTexts(maxValue);

  React.useEffect(() => {
    const getBarData = async () => {
      // Hydrate projects with session data
      const hydratedProjects = await Promise.all(projects.map(async project => ({
        id: project.id,
        title: project.title,
        sessions: await DataStore.query(Session, c => c.project.id.eq(project.id))
          // Pull words from sessions
          .then(sessions => sessions.map(session => ({ words: session.words }))),
      })));

      // Data is grouped by projects, sum words by project
      const result = _(hydratedProjects)
        .map((item): BarDataItemType => ({
          label: item.title,
          value: _.sumBy(item.sessions, 'words'),
          labelComponent: () => renderLabel(item.title),
        }))
        // Sort descending
        .sortBy('value')
        .reverse()
        .value();

      setBarData(result);
    };

    getBarData().then();

  }, [projects]);

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
