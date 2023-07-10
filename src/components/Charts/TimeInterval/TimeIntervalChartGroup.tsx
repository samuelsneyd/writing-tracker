import * as React from 'react';
import { Tab, TabView, TabViewProps, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { TimeInterval6Month } from './TimeInterval6Month';
import { TimeIntervalDay } from './TimeIntervalDay';
import { TimeIntervalMonth } from './TimeIntervalMonth';
import { TimeIntervalWeek } from './TimeIntervalWeek';
import { TimeIntervalYear } from './TimeIntervalYear';

export const TimeIntervalChartGroup = (props: TabViewProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);
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
      <Text category="h6">Time</Text>
      <TabView
        {...props}
        selectedIndex={selectedIndex}
        onSelect={onSelect}
        shouldLoadComponent={shouldLoadComponent}
        animationDuration={0}
        swipeEnabled={false}
        style={styles.tabViewContainer}
      >
        <Tab title="Day"><TimeIntervalDay showTitle={false} chartContainerStyle={styles.barChartContainer} /></Tab>
        <Tab title="Week"><TimeIntervalWeek showTitle={false} chartContainerStyle={styles.barChartContainer}/></Tab>
        <Tab title="Month"><TimeIntervalMonth showTitle={false} chartContainerStyle={styles.barChartContainer}/></Tab>
        <Tab title="6 Month"><TimeInterval6Month showTitle={false} chartContainerStyle={styles.barChartContainer}/></Tab>
        <Tab title="Year"><TimeIntervalYear showTitle={false} chartContainerStyle={styles.barChartContainer}/></Tab>
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
