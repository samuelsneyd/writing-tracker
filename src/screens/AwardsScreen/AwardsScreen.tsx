import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import useAwards from '../../hooks/useAwards/useAwards';
import useLoginStreak from '../../hooks/useLoginStreak/useLoginStreak';
import { useAppSelector } from '../../store/hooks';
import type { MoreStackParamList } from '../../types/types';
import { Card, Divider, Layout, TopNavigation, Text, TopNavigationAction } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<MoreStackParamList, 'Awards'>

const AwardsScreen = ({ navigation }: Props): React.ReactElement => {
  const awards = useAwards();
  const loginStreak = useLoginStreak({});
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Awards" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Layout style={styles.body}>
          {awards &&
            Object.values(awards)
              .map(award => ({
                ...award,
                progressSummary: award.getProgress(reduxProjects, reduxSessions, loginStreak),
              }))
              .map(award => ({
                ...award,
                isCompleted: award.progressSummary.progress === 1,
              }))
              .map(award => (
                <Card
                  key={award.id}
                  style={styles.card}
                  header={<Text category="h6">{award.name}</Text>}
                  footer={
                    <Text appearance="hint" status={award.isCompleted ? 'success' : 'warning'}>
                      {award.isCompleted ? 'Completed' : 'Not completed'}
                    </Text>
                  }
                >
                  <Text>{award.description}</Text>
                  <Text>{award.progressSummary.current} / {award.progressSummary.target}</Text>
                  <Text>{(award.progressSummary.progress * 100).toFixed(0)}%</Text>
                </Card>
              ))
          }
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    marginVertical: 8,
  },
});

export default AwardsScreen;
