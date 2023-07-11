import * as React from 'react';
import _ from 'lodash';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SerializedProject } from '../../models/serialized';
import { useAppDispatch } from '../../store/hooks';
import { projectAdded } from '../../store/projects/projectsSlice';
import { CreateProjectInput } from '../../types/API';
import type { ProjectsStackParamList } from '../../types/types';
import { Project, ProjectStatus, ProjectType } from '../../models';
import { serializeModel } from '@aws-amplify/datastore/ssr';
import { DataStore } from 'aws-amplify';
import {
  Button,
  Divider,
  IndexPath,
  Input,
  Layout,
  Select,
  SelectItem,
  Spinner,
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

const initialProjectValues: CreateProjectInput = {
  title: '',
  description: '',
  type: ProjectType.BOOK,
  status: ProjectStatus.IN_PROGRESS,
  initialWords: 0,
  overallWordTarget: 120000,
  wordTarget: {
    mon: { enabled: true, words: 500 },
    tue: { enabled: true, words: 500 },
    wed: { enabled: true, words: 500 },
    thu: { enabled: true, words: 500 },
    fri: { enabled: true, words: 500 },
    sat: { enabled: false, words: 0 },
    sun: { enabled: false, words: 0 },
  },
  wordsPerPage: 300,
};

type Props = NativeStackScreenProps<ProjectsStackParamList, 'ProjectNew'>;

const ProjectNewScreen = ({ navigation }: Props): React.ReactElement => {
  const dispatch = useAppDispatch();
  const [projectForm, setProjectForm] = React.useState<CreateProjectInput>(initialProjectValues);
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [selectedTypeIndex, setSelectedTypeIndex] = React.useState<IndexPath>(new IndexPath(0));
  const [selectedStatusIndex, setSelectedStatusIndex] = React.useState<IndexPath>(new IndexPath(0));
  const [weeklyTarget, setWeeklyTarget] = React.useState<number>(0);

  React.useEffect(() => {
    // Update weekly target as sum of daily targets
    const sumWeeklyTarget = _(projectForm.wordTarget).values().sumBy('words');

    setWeeklyTarget(sumWeeklyTarget);
  }, [projectForm]);

  const backAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  const renderOption = (title: string): React.ReactElement => (
    <SelectItem key={title} title={title} />
  );

  const handleSave = async () => {
    // TODO - add input validation and error handling
    if (!projectForm) {
      console.log('No project to save!');
      return;
    }

    setIsSaving(true);
    try {
      const savedProject = await DataStore.save(new Project(projectForm));
      dispatch(projectAdded(serializeModel(savedProject) as unknown as SerializedProject));
      const { id, title } = savedProject;

      navigation.popToTop();
      navigation.navigate('ProjectDetails', { id, title });
    } catch (e) {
      // TODO - show error message
      setIsSaving(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <TopNavigation title="New Project" alignment="center" accessoryLeft={backAction} />
        <Divider />
        <Layout style={styles.body}>
          {projectForm && !isSaving
            ? <>
              <Input
                placeholder="Title"
                label="Title"
                value={projectForm.title}
                onChangeText={nextValue => setProjectForm({ ...projectForm, title: nextValue })}
                size="large"
              />
              <Input
                placeholder="Description"
                label="Description"
                value={projectForm.description}
                onChangeText={nextValue => setProjectForm({ ...projectForm, description: nextValue })}
                size="large"
                multiline={true}
                maxLength={300}
              />
              <Select
                label="Type"
                value={PROJECT_TYPE_DATA[selectedTypeIndex.row].display}
                style={styles.select}
                selectedIndex={selectedTypeIndex}
                onSelect={index => {
                  const indexPath = index as IndexPath;
                  setSelectedTypeIndex(indexPath);
                  setProjectForm({ ...projectForm, type: PROJECT_TYPE_DATA[indexPath.row].enumVal });
                }}
              >
                {PROJECT_TYPE_DATA.map(type => renderOption(type.display))}
              </Select>
              <Select
                label="Status"
                value={PROJECT_STATUS_DATA[selectedStatusIndex.row].display}
                style={styles.select}
                selectedIndex={selectedStatusIndex}
                onSelect={index => {
                  const indexPath = index as IndexPath;
                  setSelectedStatusIndex(indexPath);
                  setProjectForm({ ...projectForm, status: PROJECT_STATUS_DATA[indexPath.row].enumVal });
                }}
              >
                {PROJECT_STATUS_DATA.map(status => renderOption(status.display))}
              </Select>
              <Layout style={styles.horizontalContainer}>
                <Input
                  style={styles.horizontalContent}
                  placeholder="0"
                  label="Overall word target"
                  value={projectForm.overallWordTarget ? projectForm.overallWordTarget.toString() : ''}
                  onChangeText={nextValue => setProjectForm({
                    ...projectForm,
                    overallWordTarget: parseInt(nextValue.replace(/\D/g, '')) || 0,
                  })}
                  size="large"
                  keyboardType="number-pad"
                />
                <Input
                  style={styles.horizontalContent}
                  placeholder="0"
                  label="Initial words"
                  value={projectForm.initialWords ? projectForm.initialWords.toString() : ''}
                  onChangeText={nextValue => setProjectForm({
                    ...projectForm,
                    initialWords: parseInt(nextValue.replace(/\D/g, '')) || 0,
                  })}
                  size="large"
                  keyboardType="number-pad"
                />
              </Layout>
              <Text appearance="hint">Daily targets</Text>
              <DailyWordRow form={projectForm} setForm={setProjectForm} dayName="Monday" dayKey="mon" />
              <DailyWordRow form={projectForm} setForm={setProjectForm} dayName="Tuesday" dayKey="tue" />
              <DailyWordRow form={projectForm} setForm={setProjectForm} dayName="Wednesday" dayKey="wed" />
              <DailyWordRow form={projectForm} setForm={setProjectForm} dayName="Thursday" dayKey="thu" />
              <DailyWordRow form={projectForm} setForm={setProjectForm} dayName="Friday" dayKey="fri" />
              <DailyWordRow form={projectForm} setForm={setProjectForm} dayName="Saturday" dayKey="sat" />
              <DailyWordRow form={projectForm} setForm={setProjectForm} dayName="Sunday" dayKey="sun" />
              <Text appearance="hint">Weekly target: {weeklyTarget}</Text>
              <Input
                placeholder="0"
                label="Words per page"
                value={projectForm.wordsPerPage ? projectForm.wordsPerPage.toString() : ''}
                onChangeText={nextValue => setProjectForm({
                  ...projectForm,
                  wordsPerPage: parseInt(nextValue.replace(/\D/g, '')) || 0,
                })}
                size="large"
                keyboardType="number-pad"
              />
              <Button onPress={handleSave}>Save Project</Button>
            </>
            : <Spinner />
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
    gap: 10,
  },
  horizontalContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  horizontalContent: {
    flex: 1,
  },
  select: {
    width: '100%',
  },
});

export default ProjectNewScreen;
