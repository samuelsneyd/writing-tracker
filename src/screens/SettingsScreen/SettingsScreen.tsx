import * as React from 'react';
import { ListRenderItemInfo, SafeAreaView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { SettingsStackParamList } from '../../types/types';
import {
  Divider,
  Layout,
  List,
  ListItem,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';
import { data } from './data';

type Props = NativeStackScreenProps<SettingsStackParamList, 'Settings'>;

const SettingsScreen = ({ navigation }: Props): React.ReactElement => {
  const renderItem = (info: ListRenderItemInfo<any>) => {
    const { item } = info;

    return item.isSeparator
      ? <Layout level="2" style={styles.listSeparator} />
      : (
        <ListItem
          title={() => <Text category="s2" status={item.status || 'basic'} style={styles.listItem}>{item.title}</Text>}
          description={item.description}
          accessoryRight={item.accessoryRight}
          onPress={item.onPress}
        />
      );
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Settings" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={styles.body}>
        <List
          style={styles.verticalList}
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={renderItem}
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
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
  verticalList: {
    width: '100%',
  },
  listSeparator: {
    width: '100%',
    height: 32,
  },
  listItem: {
    paddingLeft: 8,
  },
});

export default SettingsScreen;
