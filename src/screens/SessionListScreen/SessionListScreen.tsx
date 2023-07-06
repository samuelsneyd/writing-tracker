import * as React from 'react';
import { format } from 'date-fns';
import { ListRenderItemInfo, SafeAreaView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SerializedSession } from '../../models/serialized';
import { useAppSelector } from '../../store/hooks';
import type { ProjectsStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, TopNavigationAction, List, ListItem } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'ListSessions'>

const SettingsScreen = ({ navigation, route }: Props): React.ReactElement => {
  const projectId = route.params.projectId;
  const projects = useAppSelector(state => state.projects);
  const project = projects.find(project => project.id === projectId);
  const sessions = useAppSelector(state => state.sessions);
  const filteredSessions = !projectId
    ? sessions
    : sessions.filter(session => session.projectSessionsId === projectId);

  const renderVerticalItem = (info: ListRenderItemInfo<SerializedSession>): React.ReactElement => {
    const { item } = info;
    return (
      <ListItem
        title={format(new Date(item.date), 'yyyy-MM-dd')}
        description={`${item.words} words, ${Math.floor(item.minutes / 60).toLocaleString()} hour${Math.floor(item.minutes / 60) === 1 ? '' : 's'}, ${(item.minutes % 60).toLocaleString()} minute${item.minutes % 60 === 1 ? '' : 's'}`}
        // TODO - navigate to edit session screen
        onPress={() => navigation.navigate('EditSession', { sessionId: item.id })}
      />
    );
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Sessions" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={styles.body}>
        <Text appearance="hint" category="h6">{project && project.title}</Text>
        <List
          style={styles.verticalList}
          data={filteredSessions}
          ItemSeparatorComponent={Divider}
          renderItem={renderVerticalItem}
        />
      </Layout>
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
    paddingTop: 16,
    gap: 10,
  },
  verticalList: {
    width: '100%',
  },
});

export default SettingsScreen;
