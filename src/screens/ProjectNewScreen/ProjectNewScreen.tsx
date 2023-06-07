import * as React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import { Project, ProjectStatus, ProjectType } from '../../models';
import { DataStore } from 'aws-amplify';
import {
  Button,
  Divider,
  IndexPath,
  Input,
  Layout,
  Select,
  SelectItem,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import DailyWordRow from '../../components/DailyWordRow/DailyWordRow';
import { capitalCase } from 'change-case';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type EnumObject<T> = {
  enumVal: T,
  display: string,
};

const enumToSelectData = <T extends string>(enumObj: Record<string, T>): EnumObject<T>[] => {
  return Object.keys(enumObj).map((key) => ({
    enumVal: enumObj[key as keyof typeof enumObj],
    display: capitalCase(enumObj[key as keyof typeof enumObj] as string),
  }));
};

const PROJECT_TYPE_DATA: EnumObject<ProjectType>[] = enumToSelectData(ProjectType);

const PROJECT_STATUS_DATA: EnumObject<ProjectStatus>[] = enumToSelectData(ProjectStatus);

type Props = NativeStackScreenProps<ProjectsStackParamList, 'New'>

const ProjectNewScreen = ({ navigation }: Props): React.ReactElement => {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [type, setType] = React.useState<ProjectType>(ProjectType.BOOK);
  const [selectedTypeIndex, setSelectedTypeIndex] = React.useState<IndexPath>(new IndexPath(0));
  const [status, setStatus] = React.useState<ProjectStatus>(ProjectStatus.IN_PROGRESS);
  const [selectedStatusIndex, setSelectedStatusIndex] = React.useState<IndexPath>(new IndexPath(0));
  const [initialWords, setInitialWords] = React.useState<number>(0);
  const [overallWordTarget, setOverallWordTarget] = React.useState<number>(120000);
  const [wordsPerPage, setWordsPerPage] = React.useState<number>(300);
  const [monTarget, setMonTarget] = React.useState<number>(500);
  const [tueTarget, setTueTarget] = React.useState<number>(500);
  const [wedTarget, setWedTarget] = React.useState<number>(500);
  const [thuTarget, setThuTarget] = React.useState<number>(500);
  const [friTarget, setFriTarget] = React.useState<number>(500);
  const [satTarget, setSatTarget] = React.useState<number>(0);
  const [sunTarget, setSunTarget] = React.useState<number>(0);
  const [monTargetEnabled, setMonTargetEnabled] = React.useState<boolean>(true);
  const [tueTargetEnabled, setTueTargetEnabled] = React.useState<boolean>(true);
  const [wedTargetEnabled, setWedTargetEnabled] = React.useState<boolean>(true);
  const [thuTargetEnabled, setThuTargetEnabled] = React.useState<boolean>(true);
  const [friTargetEnabled, setFriTargetEnabled] = React.useState<boolean>(true);
  const [satTargetEnabled, setSatTargetEnabled] = React.useState<boolean>(false);
  const [sunTargetEnabled, setSunTargetEnabled] = React.useState<boolean>(false);

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  const renderOption = (title: string): React.ReactElement => (
    <SelectItem key={title} title={title} />
  );

  const handleSave = async () => {
    // TODO - add input validation and error handling
    const project = await DataStore.save(
      new Project({
        title,
        description,
        type,
        status,
        initialWords, // TODO - link field to UI
        overallWordTarget, // TODO - link field to UI
        wordTarget: {
          mon: { enabled: monTargetEnabled, words: monTarget || 0 },
          tue: { enabled: tueTargetEnabled, words: tueTarget || 0 },
          wed: { enabled: wedTargetEnabled, words: wedTarget || 0 },
          thu: { enabled: thuTargetEnabled, words: thuTarget || 0 },
          fri: { enabled: friTargetEnabled, words: friTarget || 0 },
          sat: { enabled: satTargetEnabled, words: satTarget || 0 },
          sun: { enabled: sunTargetEnabled, words: sunTarget || 0 },
        },
        wordsPerPage,
      }),
    );

    const { id } = project;

    navigation.popToTop();
    navigation.navigate('Details', { id, title });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
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
            onSelect={index => {
              const indexPath = index as IndexPath;
              setSelectedTypeIndex(indexPath);
              setType(PROJECT_TYPE_DATA[selectedTypeIndex.row].enumVal);
            }}
          >
            {PROJECT_TYPE_DATA.map(type => renderOption(type.display))}
          </Select>
          <Select
            label="Status"
            value={PROJECT_STATUS_DATA[selectedStatusIndex.row].display}
            style={{ width: '100%' }}
            selectedIndex={selectedStatusIndex}
            onSelect={index => {
              const indexPath = index as IndexPath;
              setSelectedStatusIndex(indexPath);
              setStatus(PROJECT_STATUS_DATA[selectedTypeIndex.row].enumVal);
            }}
          >
            {PROJECT_STATUS_DATA.map(status => renderOption(status.display))}
          </Select>
          <Text appearance="hint">Daily targets</Text>
          <DailyWordRow
            day="Monday"
            targetState={monTarget}
            setTargetState={setMonTarget}
            enabledState={monTargetEnabled}
            setEnabledState={setMonTargetEnabled}
          />
          <DailyWordRow
            day="Tuesday"
            targetState={tueTarget}
            setTargetState={setTueTarget}
            enabledState={tueTargetEnabled}
            setEnabledState={setTueTargetEnabled}
          />
          <DailyWordRow
            day="Wednesday"
            targetState={wedTarget}
            setTargetState={setWedTarget}
            enabledState={wedTargetEnabled}
            setEnabledState={setWedTargetEnabled}
          />
          <DailyWordRow
            day="Thursday"
            targetState={thuTarget}
            setTargetState={setThuTarget}
            enabledState={thuTargetEnabled}
            setEnabledState={setThuTargetEnabled}
          />
          <DailyWordRow
            day="Friday"
            targetState={friTarget}
            setTargetState={setFriTarget}
            enabledState={friTargetEnabled}
            setEnabledState={setFriTargetEnabled}
          />
          <DailyWordRow
            day="Saturday"
            targetState={satTarget}
            setTargetState={setSatTarget}
            enabledState={satTargetEnabled}
            setEnabledState={setSatTargetEnabled}
          />
          <DailyWordRow
            day="Sunday"
            targetState={sunTarget}
            setTargetState={setSunTarget}
            enabledState={sunTargetEnabled}
            setEnabledState={setSunTargetEnabled}
          />
          <Button onPress={handleSave}>Save Project</Button>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProjectNewScreen;
