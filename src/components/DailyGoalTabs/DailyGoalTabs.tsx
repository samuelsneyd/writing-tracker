import * as React from 'react';
import _ from 'lodash';
import { StyleSheet } from 'react-native';
import { Layout, Tab, TabView, TabViewElement } from '@ui-kitten/components';
import useDailyTasks from '../../hooks/useDailyTasks/useDailyTasks';
import DailyGoalCard from '../DailyGoalCard/DailyGoalCard';

const DailyGoalTabs = (): TabViewElement => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const dailyTasks = useDailyTasks();
  const [completedTasks, inProgressTasks] = _.partition(dailyTasks, task => task.progress === 1);

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
      style={styles.tabViewContainer}
      swipeEnabled={false}
    >
      <Tab title="All">
        <Layout style={styles.tabContainer}>
          {dailyTasks.map(task => <DailyGoalCard key={task.project.id} task={task} />)}
        </Layout>
      </Tab>
      <Tab title="To Do">
        <Layout style={styles.tabContainer}>
          {inProgressTasks.map(task => <DailyGoalCard key={task.project.id} task={task} />)}
        </Layout>
      </Tab>
      <Tab title="Completed">
        <Layout style={styles.tabContainer}>
          {completedTasks.map(task => <DailyGoalCard key={task.project.id} task={task} />)}
        </Layout>
      </Tab>
    </TabView>
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
    paddingTop: 16,
    gap: 16,
  },
});

export default DailyGoalTabs;
