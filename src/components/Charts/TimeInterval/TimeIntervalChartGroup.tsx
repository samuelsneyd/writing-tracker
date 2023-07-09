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
  const shouldLoadComponent = (index: number): boolean => index === selectedIndex;

  return (
    <>
      <Text category="h6">Time</Text>
      <TabView
        {...props}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
        // Lazy loading
        shouldLoadComponent={shouldLoadComponent}
        // Workaround for animation bug https://github.com/akveo/react-native-ui-kitten/issues/1234
        animationDuration={0}
        swipeEnabled={false}
        style={styles.tabViewContainer}
      >
        <Tab title="Day"><TimeIntervalDay showTitle={false} barChartContainerStyle={styles.barChartContainer} /></Tab>
        <Tab title="Week"><TimeIntervalWeek showTitle={false} barChartContainerStyle={styles.barChartContainer}/></Tab>
        <Tab title="Month"><TimeIntervalMonth showTitle={false} barChartContainerStyle={styles.barChartContainer}/></Tab>
        <Tab title="6 Month"><TimeInterval6Month showTitle={false} barChartContainerStyle={styles.barChartContainer}/></Tab>
        <Tab title="Year"><TimeIntervalYear showTitle={false} barChartContainerStyle={styles.barChartContainer}/></Tab>
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
    overflow: 'visible',
  },
  barChartContainer: {
    width: '100%',
    marginHorizontal: -8,
  },
});
