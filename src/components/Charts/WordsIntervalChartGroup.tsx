import * as React from 'react';
import { Tab, TabView, TabViewProps, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { WordsInterval6Month } from './WordsInterval6Month';
import { WordsIntervalDay } from './WordsIntervalDay';
import { WordsIntervalMonth } from './WordsIntervalMonth';
import { WordsIntervalWeek } from './WordsIntervalWeek';
import { WordsIntervalYear } from './WordsIntervalYear';

const WordsIntervalChartGroup = (props: TabViewProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

  return (
    <>
      <Text category="h6">Words</Text>
      <TabView
        {...props}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
        // Workaround for animation bug https://github.com/akveo/react-native-ui-kitten/issues/1234
        animationDuration={0}
        swipeEnabled={false}
        style={styles.tabViewContainer}
      >
        {/* Tabs children intentionally empty to avoid tab static height limitation */}
        <Tab title="Day"><React.Fragment /></Tab>
        <Tab title="Week"><React.Fragment /></Tab>
        <Tab title="Month"><React.Fragment /></Tab>
        <Tab title="6 Month"><React.Fragment /></Tab>
        <Tab title="Year"><React.Fragment /></Tab>
      </TabView>
      {/* Handle render tab content manually */}
      {selectedIndex === 0 && <WordsIntervalDay showTitle={false} />}
      {selectedIndex === 1 && <WordsIntervalWeek showTitle={false} />}
      {selectedIndex === 2 && <WordsIntervalMonth showTitle={false} />}
      {selectedIndex === 3 && <WordsInterval6Month showTitle={false} />}
      {selectedIndex === 4 && <WordsIntervalYear showTitle={false} />}
    </>
  );
};

const styles = StyleSheet.create({
  tabViewContainer: {
    flex: 1,
    width: '100%',
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});

export default WordsIntervalChartGroup;
