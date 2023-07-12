import * as React from 'react';
import { ListRenderItemInfo, SafeAreaView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { settingsSet } from '../../store/settings/settingsSlice';
import type { SettingsStackParamList } from '../../types/types';
import {
  Divider,
  Layout,
  List,
  ListItem, Radio, RadioGroup,
  Toggle,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<SettingsStackParamList, 'Settings'>;

const NotificationsToggle = () => {
  const settings = useAppSelector(state => state.settings);
  const dispatch = useAppDispatch();
  const [checked, setChecked] = React.useState<boolean>(settings.isNotificationsEnabled);

  return (
    <Toggle
      checked={checked}
      onChange={() => {
        setChecked(!settings.isNotificationsEnabled);
        dispatch(settingsSet({
          ...settings,
          isNotificationsEnabled: !settings.isNotificationsEnabled,
        }));
      }}
    />
  );
};

const WeekStartsOnRadioButtonGroup = () => {
  const settings = useAppSelector(state => state.settings);
  const dispatch = useAppDispatch();
  const [selectedIndex, setSelectedIndex] = React.useState<number>(settings.weekStartsOn);

  return (
    <RadioGroup
      style={styles.horizontalContainer}
      selectedIndex={selectedIndex}
      onChange={index => {
        dispatch(settingsSet({ ...settings, weekStartsOn: index as 0 | 1 }));
        setSelectedIndex(index);
      }}
    >
      <Radio>Sunday</Radio>
      <Radio>Monday</Radio>
    </RadioGroup>
  );
};

const data = [
  {
    title: 'Notifications',
    description: 'Enable or disable notifications',
    accessoryRight: NotificationsToggle,
  },
  {
    title: 'Week Starts On',
    description: 'For weekly goals and charts',
    accessoryRight: WeekStartsOnRadioButtonGroup,
  },
];

const SettingsScreen = ({ navigation }: Props): React.ReactElement => {
  const renderItem = (info: ListRenderItemInfo<any>) => {
    const { item } = info;

    return (
      <ListItem
        title={item.title}
        description={item.description}
        accessoryRight={item.accessoryRight}
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
  horizontalContainer: {
    flexDirection: 'row',
  },
});

export default SettingsScreen;
