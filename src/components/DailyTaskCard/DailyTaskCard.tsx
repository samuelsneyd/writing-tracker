import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, CardElement, Layout, ProgressBar, Text } from '@ui-kitten/components';
import { CardProps } from '@ui-kitten/components/ui/card/card.component';
import { getSteppedColors } from '../../hooks/useAwards/award-utils';
import { DailyTask } from '../../hooks/useDailyTasks/useDailyTasks';

const DailyTaskCard = (props: CardProps & { task: DailyTask }): CardElement => {
  const { task } = props;
  const navigation = useNavigation();

  return (
    <Card
      {...props}
      status="basic"
      style={styles.card}
      header={<Text category="s1">{task.project.title}</Text>}
      onPress={() =>
        navigation.getParent()?.navigate('ProjectsStackNavigator', {
          screen: 'Details',
          params: { id: task.project.id, title: task.project.title },
          initial: false,
        })
      }
    >
      <Layout style={styles.cardLayout}>
        <Text style={styles.text}>Write {task.wordsToDo} words</Text>
        <Text style={styles.text}>{task.wordsCompleted}/{task.wordsToDo}</Text>
        <ProgressBar
          status={getSteppedColors(task.progress)}
          progress={task.progress}
          animating={false}
        />
      </Layout>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  cardLayout: {
    flex: 1,
    gap: 8,
  },
  text: {
    textAlign: 'left',
  },
});

export default DailyTaskCard;
