import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getSteppedColors } from '../../hooks/useAwards/award-utils';
import useAwards from '../../hooks/useAwards/useAwards';
import type { MoreStackParamList } from '../../types/types';
import { Card, Divider, Layout, TopNavigation, Text, TopNavigationAction, ProgressBar } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<MoreStackParamList, 'Awards'>

const AwardsScreen = ({ navigation }: Props): React.ReactElement => {
  const awards = useAwards();

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Awards" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Layout style={styles.body}>
          <Text>Awards achieved: {awards.filter(award => award.isCompleted).length}/{awards.length}</Text>
          {awards.map(award => (
            <Card
              key={award.type}
              style={styles.card}
              header={<Text category="h6">{award.name}</Text>}
              footer={
                <Text appearance="hint">
                  {award.isCompleted ? 'Completed ' : 'Not completed'}
                  {award.isCompleted
                    ? award.date
                      // Show date completed
                      ? new Date(award.date).toLocaleDateString()
                      // Fallback to today if completed but date missing
                      : new Date().toLocaleDateString()
                    // Not completed, show nothing
                    : ''
                  }
                </Text>
              }
            >
              <Text>{award.description}</Text>
              <Text>{award.progressSummary.current.toLocaleString()} / {award.progressSummary.target.toLocaleString()}</Text>
              <Text>{(award.progressSummary.progress * 100).toFixed(0)}%</Text>
              <ProgressBar
                status={getSteppedColors(award.progressSummary.progress)}
                progress={award.progressSummary.progress}
                animating={false}
              />
            </Card>
          ))}
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
    gap: 16,
  },
  card: {
    width: '100%',
  },
});

export default AwardsScreen;
