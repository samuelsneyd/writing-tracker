import * as React from 'react';
import _ from 'lodash';
import { StyleSheet } from 'react-native';
import { Layout, Tab, TabView } from '@ui-kitten/components';
import useDailyTasks from '../../hooks/useDailyTasks/useDailyTasks';
import DailyTaskCard from '../DailyTaskCard/DailyTaskCard';

const DailyTaskTabs = (): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
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
          {dailyTasks.map(task => <DailyTaskCard key={task.project.id} task={task} />)}
        </Layout>
      </Tab>
      <Tab title="In Progress">
        <Layout style={styles.tabContainer}>
          {inProgressTasks.map(task => <DailyTaskCard key={task.project.id} task={task} />)}
        </Layout>
      </Tab>
      <Tab title="Completed">
        <Layout style={styles.tabContainer}>
          {completedTasks.map(task => <DailyTaskCard key={task.project.id} task={task} />)}
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

export default DailyTaskTabs;
