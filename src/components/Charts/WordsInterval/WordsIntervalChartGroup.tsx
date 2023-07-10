import * as React from 'react';
import { Tab, TabView, TabViewProps, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { WordsInterval6Month } from './WordsInterval6Month';
import { WordsIntervalDay } from './WordsIntervalDay';
import { WordsIntervalMonth } from './WordsIntervalMonth';
import { WordsIntervalWeek } from './WordsIntervalWeek';
import { WordsIntervalYear } from './WordsIntervalYear';

export const WordsIntervalChartGroup = (props: TabViewProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

  return (
    <>
      <Text category="h6">Words</Text>
      <TabView
        {...props}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
        animationDuration={0}
        swipeEnabled={false}
        style={styles.tabViewContainer}
      >
        <Tab title="Day">
          <WordsIntervalDay showTitle={false} chartContainerStyle={styles.barChartContainer} />
        </Tab>
        <Tab title="Week">
          <WordsIntervalWeek showTitle={false} chartContainerStyle={styles.barChartContainer} />
        </Tab>
        <Tab title="Month">
          <WordsIntervalMonth showTitle={false} chartContainerStyle={styles.barChartContainer} />
        </Tab>
        <Tab title="6 Month">
          <WordsInterval6Month showTitle={false} chartContainerStyle={styles.barChartContainer} />
        </Tab>
        <Tab title="Year">
          <WordsIntervalYear showTitle={false} chartContainerStyle={styles.barChartContainer} />
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
