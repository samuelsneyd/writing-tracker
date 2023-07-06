import * as React from 'react';
import _ from 'lodash';
import { format } from 'date-fns';
import { ListRenderItemInfo, SafeAreaView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SerializedSession } from '../../models/serialized';
import { useAppSelector } from '../../store/hooks';
import type { ProjectsStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, TopNavigationAction, List, ListItem } from '@ui-kitten/components';
import { ArrowIosBackIcon, ArrowIosForwardIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'ListSessions'>

const SettingsScreen = ({ navigation, route }: Props): React.ReactElement => {
  const { projectId } = route.params;
  const projects = useAppSelector(state => state.projects);
  const project = projectId ? projects.find(project => project.id === projectId) : undefined;
  const sessions = useAppSelector(state => state.sessions);
  const filteredSessions = _(sessions)
    .filter(session => !projectId || session.projectSessionsId === projectId)
    .sortBy('date')
    .reverse()
    .value();

  const renderVerticalItem = (info: ListRenderItemInfo<SerializedSession>): React.ReactElement => {
    const { item } = info;
    const hours = Math.floor(item.minutes / 60);
    const minutes = Math.floor(item.minutes % 60);
    const title = format(new Date(item.date), 'yyyy-MM-dd');
    const description = `${item.words} words, `
      + `${hours.toLocaleString()} hour${hours === 1 ? '' : 's'}, `
      + `${minutes.toLocaleString()} minute${minutes === 1 ? '' : 's'}`;

    return (
      <ListItem
        key={item.id}
        title={title}
        description={description}
        onPress={() => navigation.navigate('EditSession', { sessionId: item.id })}
        accessoryRight={ArrowIosForwardIcon}
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
        <Text appearance="hint" category="h6">{projectId && project ? project.title : 'All Sessions'}</Text>
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
