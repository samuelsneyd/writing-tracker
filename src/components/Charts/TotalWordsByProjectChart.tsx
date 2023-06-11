import { DataStore } from 'aws-amplify';
import * as React from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import _ from 'lodash';
import { Project, Session } from '../../models';
import { Text, TextElement, useTheme } from '@ui-kitten/components';
import { BarChart } from 'react-native-gifted-charts';

type BarDataItemType = {
  value?: number;
  onPress?: any;
  frontColor?: ColorValue;
  sideColor?: ColorValue;
  topColor?: ColorValue;
  showGradient?: Boolean;
  gradientColor?: any;
  label?: String;
  barWidth?: number;
  sideWidth?: number;
  labelTextStyle?: any;
  topLabelComponent?: Function;
  topLabelContainerStyle?: any;
  disablePress?: any;
  labelComponent?: View | Function;
  spacing?: number;
  barBackgroundPattern?: Function;
  patternId?: String;
  barStyle?: object;
};

type Props = {
  sessions: Session[];
  projects: Project[];
};

const TotalWordsByProjectChart = ({ projects }: Props): React.ReactElement => {
  const [barData, setBarData] = React.useState<BarDataItemType[]>([]);
  const theme = useTheme();

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
          labelComponent: () => (
            <Text
              style={styles.barLabel}
              appearance="hint"
              numberOfLines={1}
            >{item.title}</Text>
          ),
        }))
        // Sort descending
        .sortBy('value')
        .reverse()
        .value();

      setBarData(result);
    };

    getBarData().then();

  }, [projects]);


  const renderTooltip = (item: BarDataItemType): TextElement => (
    <Text appearance="hint" style={styles.toolTip}>{item.value?.toLocaleString()}</Text>
  );

  const getMaxYAxisValue = (): number => {
    const defaultMax = 1000;
    const step = 1000;
    const dataCeiling = Math.ceil(_.max(barData.map(d => (d.value ?? 0) / step)) || 0) * step;
    return dataCeiling || defaultMax;
  };

  const getYAxisLabels = (): string[] => {
    const maxYAxisValue = getMaxYAxisValue();
    const kLimit = 10000;
    return [
      0,
      maxYAxisValue / 4,
      maxYAxisValue / 2,
      (maxYAxisValue / 4) * 3,
      maxYAxisValue,
    ].map(n => {
      if (n === 0 || maxYAxisValue < kLimit) {
        return n.toLocaleString();
      }
      return `${n / 1000}K`;
    });
  };

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
        maxValue={getMaxYAxisValue()}
        noOfSections={4}
        renderTooltip={renderTooltip}
        yAxisLabelWidth={50}
        yAxisLabelTexts={getYAxisLabels()}
        yAxisTextStyle={{ color: theme['text-hint-color'] }}
        yAxisColor={theme['text-hint-color']}
        xAxisColor={theme['text-hint-color']}
        xAxisLabelTextStyle={{ color: theme['text-hint-color'] }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  toolTip: {
    textAlign: 'center',
  },
  barLabel: {
    textAlign: 'center',
  },
});

export default TotalWordsByProjectChart;
