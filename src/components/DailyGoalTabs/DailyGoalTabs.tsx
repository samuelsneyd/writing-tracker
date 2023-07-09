import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Tab, TabView, TabViewProps, Text } from '@ui-kitten/components';
import useDailyTasks from '../../hooks/useDailyTasks/useDailyTasks';
import DailyGoalCard from '../DailyGoalCard/DailyGoalCard';

const DailyGoalTabs = (props: TabViewProps): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const { allTasks, inProgressTasks, completedTasks } = useDailyTasks();

  return (
    <>
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
        <Tab title="All"><React.Fragment /></Tab>
        <Tab title="To Do"><React.Fragment /></Tab>
        <Tab title="Completed"><React.Fragment /></Tab>
      </TabView>
      {/* Handle render tab content manually */}
      <Layout style={styles.tabViewContainer}>
        {selectedIndex === 0 &&
          <Layout style={styles.tabContainer}>
            {allTasks.map(task => <DailyGoalCard key={task.project.id} task={task} />)}
            {allTasks.length === 0 && <Text appearance="hint">No goals today</Text>}
          </Layout>
        }
        {selectedIndex === 1 &&
          <Layout style={styles.tabContainer}>
            {inProgressTasks.map(task => <DailyGoalCard key={task.project.id} task={task} />)}
            {inProgressTasks.length === 0 && <Text appearance="hint">No outstanding goals today</Text>}
          </Layout>
        }
        {selectedIndex === 2 &&
          <Layout style={styles.tabContainer}>
            {completedTasks.map(task => <DailyGoalCard key={task.project.id} task={task} />)}
            {completedTasks.length === 0 && <Text appearance="hint">No daily goals completed yet</Text>}
          </Layout>
        }
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  tabViewContainer: {
    width: '100%',
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});

export default DailyGoalTabs;
