import * as React from 'react';
import { Tab, TabView, TabViewProps, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { ProgressPercentageByProject } from './ProgressPercentageByProject';
import { TotalTimeByProject } from './TotalTimeByProject';
import { TotalWordsByProject } from './TotalWordsByProject';

export const ProjectsChartGroup = (props: TabViewProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [loadedIndexes, setLoadedIndexes] = React.useState<{ [key: number]: boolean }>({
    [selectedIndex]: true,
  });
  // Lazy load on first load, then stay loaded afterward
  const shouldLoadComponent = (index: number) => selectedIndex === index || loadedIndexes[index];
  const onSelect = (index: number) => {
    setSelectedIndex(index);
    setLoadedIndexes({ ...loadedIndexes, [index]: true });
  };

  return (
    <>
      <Text category="h6">Projects</Text>
      <TabView
        {...props}
        selectedIndex={selectedIndex}
        onSelect={onSelect}
        shouldLoadComponent={shouldLoadComponent}
        animationDuration={0}
        swipeEnabled={false}
        style={styles.tabViewContainer}
      >
        <Tab title="Progress">
          <ProgressPercentageByProject showTitle={false} chartContainerStyle={styles.barChartContainer} />
        </Tab>
        <Tab title="Words">
          <TotalWordsByProject showTitle={false} chartContainerStyle={styles.barChartContainer} />
        </Tab>
        <Tab title="Time">
          <TotalTimeByProject showTitle={false} chartContainerStyle={styles.barChartContainer} />
        </Tab>
      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  tabViewContainer: {
    flex: 1,
    width: '100%',
    rowGap: 16,
    paddingBottom: 8,
  },
  barChartContainer: {
    width: '100%',
    marginHorizontal: -8,
    paddingBottom: 20,
  },
});
