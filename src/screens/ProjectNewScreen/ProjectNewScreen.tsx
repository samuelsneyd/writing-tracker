import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import { Project, ProjectStatus, ProjectType } from '../../models';
import {
  Divider,
  IndexPath,
  Input,
  Layout,
  Select,
  SelectItem,
  Text,
  Toggle,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { capitalCase } from 'change-case';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

const PROJECT_TYPE_DATA = Object.keys(ProjectType).map(type => ({
  type,
  display: capitalCase(type),
}));
const PROJECT_STATUS_DATA = Object.keys(ProjectStatus).map(status => ({
  status,
  display: capitalCase(status),
}));

type Props = NativeStackScreenProps<ProjectsStackParamList, 'New'>

const ProjectNewScreen = ({ navigation }: Props): React.ReactElement => {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [projectType, setProjectType] = React.useState<ProjectType>(ProjectType.BOOK);
  const [selectedTypeIndex, setSelectedTypeIndex] = React.useState<IndexPath>(new IndexPath(0));
  const [status, setStatus] = React.useState<ProjectStatus>(ProjectStatus.IN_PROGRESS);
  const [selectedStatusIndex, setSelectedStatusIndex] = React.useState<IndexPath>(new IndexPath(0));
  const [monTarget, setMonTarget] = React.useState<string>('');
  const [monToggleChecked, setMonToggleChecked] = React.useState<boolean>(true);
  const [tueTarget, setTueTarget] = React.useState<string>('');
  const [tueToggleChecked, setTueToggleChecked] = React.useState<boolean>(true);
  const [wedTarget, setWedTarget] = React.useState<string>('');
  const [wedToggleChecked, setWedToggleChecked] = React.useState<boolean>(true);
  const [thuTarget, setThuTarget] = React.useState<string>('');
  const [thuToggleChecked, setThuToggleChecked] = React.useState<boolean>(true);
  const [friTarget, setFriTarget] = React.useState<string>('');
  const [friToggleChecked, setFriToggleChecked] = React.useState<boolean>(true);
  const [satTarget, setSatTarget] = React.useState<string>('');
  const [satToggleChecked, setSatToggleChecked] = React.useState<boolean>(false);
  const [sunTarget, setSunTarget] = React.useState<string>('');
  const [sunToggleChecked, setSunToggleChecked] = React.useState<boolean>(false);

  const [project, setProject] = React.useState<Project>(new Project({
    name: '',
    description: '',
    type: ProjectType.BOOK,
    status: ProjectStatus.IN_PROGRESS,
    initialWords: 0,
    overallWordTarget: 0,
    wordTarget: {
      mon: { enabled: true, words: 0 },
      tue: { enabled: true, words: 0 },
      wed: { enabled: true, words: 0 },
      thu: { enabled: true, words: 0 },
      fri: { enabled: true, words: 0 },
      sat: { enabled: false, words: 0 },
      sun: { enabled: false, words: 0 },
    },
    wordsPerPage: 300,
  }));

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  const renderOption = (title: string): React.ReactElement => (
    <SelectItem key={title} title={title} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title={'New Project'} alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
        <Input
          placeholder="Title"
          label="Title"
          value={title}
          onChangeText={nextValue => setTitle(nextValue)}
          size="large"
        />
        <Input
          placeholder="Description"
          label="Description"
          value={description}
          onChangeText={nextValue => setDescription(nextValue)}
          size="large"
          multiline={true}
          maxLength={300}
        />
        <Select
          label="Type"
          value={PROJECT_TYPE_DATA[selectedTypeIndex.row].display}
          style={{ width: '100%' }}
          selectedIndex={selectedTypeIndex}
          onSelect={index => index instanceof IndexPath && setSelectedTypeIndex(index)}
        >
          {PROJECT_TYPE_DATA.map(type => renderOption(type.display))}
        </Select>
        <Select
          label="Status"
          value={PROJECT_STATUS_DATA[selectedStatusIndex.row].display}
          style={{ width: '100%' }}
          selectedIndex={selectedStatusIndex}
          onSelect={index => index instanceof IndexPath && setSelectedStatusIndex(index)}
        >
          {PROJECT_STATUS_DATA.map(status => renderOption(status.display))}
        </Select>
        <Text appearance="hint">Daily targets</Text>
        <Layout style={styles.dailyTargetRow}>
          <Toggle
            style={styles.dailyTargetRowItem}
            checked={monToggleChecked}
            onChange={() => {
              monToggleChecked && setMonTarget('');
              setMonToggleChecked(!monToggleChecked);
            }}
          >Monday</Toggle>
          <Input
            style={styles.dailyTargetRowItem}
            placeholder="0"
            value={monTarget}
            onChangeText={nextValue => setMonTarget(nextValue.replace(/\D/g, ''))}
            disabled={!monToggleChecked}
            keyboardType="number-pad"
          ></Input>
        </Layout>
        <Layout style={styles.dailyTargetRow}>
          <Toggle
            style={styles.dailyTargetRowItem}
            checked={tueToggleChecked}
            onChange={() => {
              tueToggleChecked && setTueTarget('');
              setTueToggleChecked(!tueToggleChecked);
            }}
          >Tuesday</Toggle>
          <Input
            style={styles.dailyTargetRowItem}
            placeholder="0"
            value={tueTarget}
            onChangeText={nextValue => setTueTarget(nextValue.replace(/\D/g, ''))}
            disabled={!tueToggleChecked}
            keyboardType="number-pad"
          ></Input>
        </Layout>
        <Layout style={styles.dailyTargetRow}>
          <Toggle
            style={styles.dailyTargetRowItem}
            checked={wedToggleChecked}
            onChange={() => {
              wedToggleChecked && setWedTarget('');
              setWedToggleChecked(!wedToggleChecked);
            }}
          >Wednesday</Toggle>
          <Input
            style={styles.dailyTargetRowItem}
            placeholder="0"
            value={wedTarget}
            onChangeText={nextValue => setWedTarget(nextValue.replace(/\D/g, ''))}
            disabled={!wedToggleChecked}
            keyboardType="number-pad"
          ></Input>
        </Layout>
        <Layout style={styles.dailyTargetRow}>
          <Toggle
            style={styles.dailyTargetRowItem}
            checked={thuToggleChecked}
            onChange={() => {
              thuToggleChecked && setThuTarget('');
              setThuToggleChecked(!thuToggleChecked);
            }}
          >Thursday</Toggle>
          <Input
            style={styles.dailyTargetRowItem}
            placeholder="0"
            value={thuTarget}
            onChangeText={nextValue => setThuTarget(nextValue.replace(/\D/g, ''))}
            disabled={!thuToggleChecked}
            keyboardType="number-pad"
          ></Input>
        </Layout>
        <Layout style={styles.dailyTargetRow}>
          <Toggle
            style={styles.dailyTargetRowItem}
            checked={friToggleChecked}
            onChange={() => {
              friToggleChecked && setFriTarget('');
              setFriToggleChecked(!friToggleChecked);
            }}
          >Friday</Toggle>
          <Input
            style={styles.dailyTargetRowItem}
            placeholder="0"
            value={friTarget}
            onChangeText={nextValue => setFriTarget(nextValue.replace(/\D/g, ''))}
            disabled={!friToggleChecked}
            keyboardType="number-pad"
          ></Input>
        </Layout>
        <Layout style={styles.dailyTargetRow}>
          <Toggle
            style={styles.dailyTargetRowItem}
            checked={satToggleChecked}
            onChange={() => {
              satToggleChecked && setSatTarget('');
              setSatToggleChecked(!satToggleChecked);
            }}
          >Saturday</Toggle>
          <Input
            style={styles.dailyTargetRowItem}
            placeholder="0"
            value={satTarget}
            onChangeText={nextValue => setSatTarget(nextValue.replace(/\D/g, ''))}
            disabled={!satToggleChecked}
            keyboardType="number-pad"
          ></Input>
        </Layout>
        <Layout style={styles.dailyTargetRow}>
          <Toggle
            style={styles.dailyTargetRowItem}
            checked={sunToggleChecked}
            onChange={() => {
              sunToggleChecked && setSunTarget('');
              setSunToggleChecked(!sunToggleChecked);
            }}
          >Sunday</Toggle>
          <Input
            style={styles.dailyTargetRowItem}
            placeholder="0"
            value={sunTarget}
            onChangeText={nextValue => setSunTarget(nextValue.replace(/\D/g, ''))}
            disabled={!sunToggleChecked}
            keyboardType="number-pad"
          ></Input>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dailyTargetRow: {
    flexDirection: 'row',
  },
  dailyTargetRowItem: {
    flex: 1,
  },
});

export default ProjectNewScreen;
