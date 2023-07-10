import * as React from 'react';
import { Tab, TabView, TabViewProps, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { SessionHeatmap } from './SessionHeatmap';
import { TotalWordsByDay } from './TotalWordsByDay';

export const MiscChartGroup = (props: TabViewProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

  return (
    <>
      <Text category="h6">Misc</Text>
      <TabView
        {...props}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
        animationDuration={0}
        swipeEnabled={false}
        style={styles.tabViewContainer}
      >
        <Tab title="Words by day of the week">
          <TotalWordsByDay showTitle={false} chartContainerStyle={styles.barChartContainer} />
        </Tab>
        <Tab title="Session heatmap">
          <SessionHeatmap showTitle={false} chartContainerStyle={styles.barChartContainer} />
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