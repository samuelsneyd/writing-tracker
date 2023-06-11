import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useIsFocused } from '@react-navigation/native';
import { DataStore, Predicates } from 'aws-amplify';
import TotalWordsByDayChart from '../../components/Charts/TotalWordsByDayChart';
import { Session } from '../../models';
import type { MoreStackParamList } from '../../types/types';
import {
  Divider,
  Layout,
  TopNavigation,
  Text,
  TopNavigationAction,
} from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<MoreStackParamList, 'Charts'>

const ChartsScreen = ({ navigation }: Props): React.ReactElement => {
  const [sessions, setSessions] = React.useState<Session[]>([]);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    const fetchSessions = async () => {
      const foundSessions = await DataStore.query(Session, Predicates.ALL);
      setSessions(foundSessions);
    };

    fetchSessions().then();
  }, [isFocused]);

  const backAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Charts" alignment="center" accessoryLeft={backAction} />
      <Divider />
      <ScrollView style={styles.container} contentContainerStyle={styles.container}>
        <Layout style={styles.body}>
          <Text category="h1">Charts</Text>
          <TotalWordsByDayChart sessions={sessions} />
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
    gap: 10,
  },
});

export default ChartsScreen;
