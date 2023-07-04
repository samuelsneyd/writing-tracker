import * as React from 'react';
import _ from 'lodash';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SerializedProject } from '../../models/serialized';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { projectAdded } from '../../store/projects/projectsSlice';
import type { ProjectsStackParamList } from '../../types/types';
import { Project, ProjectStatus, ProjectType } from '../../models';
import { deserializeModel, serializeModel } from '@aws-amplify/datastore/ssr';
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

type Props = NativeStackScreenProps<ProjectsStackParamList, 'EditProject'>

const ProjectNewScreen = ({ route, navigation }: Props): React.ReactElement => {
  const { id } = route.params;
  const dispatch = useAppDispatch();
  const reduxProjects = useAppSelector(state => state.projects);

  // Try read from redux first
  let foundReduxProject: Project | undefined;
  try {
    const found = reduxProjects.find(project => project.id === id);
    if (found) {
      foundReduxProject = deserializeModel(Project, found as unknown as Project);
    }
  } catch (e) {
    foundReduxProject = undefined;
  }

  const [isLoaded, setIsLoaded] = React.useState<boolean>(!!foundReduxProject);
  const [project, setProject] = React.useState<Project | undefined>(foundReduxProject);
  const [selectedTypeIndex, setSelectedTypeIndex] = React.useState<IndexPath>(new IndexPath(
    foundReduxProject
      ? PROJECT_TYPE_DATA.findIndex(({ enumVal }) => enumVal === foundReduxProject?.type)
      : 0,
  ));
  const [selectedStatusIndex, setSelectedStatusIndex] = React.useState<IndexPath>(new IndexPath(
    foundReduxProject
      ? PROJECT_STATUS_DATA.findIndex(({ enumVal }) => enumVal === foundReduxProject?.status)
      : 0,
  ));
  const [weeklyTarget, setWeeklyTarget] = React.useState<number>(0);

  React.useEffect(() => {
    if (!id) {
      return;
    }

    const getProject = async () => {
      try {
        const foundProject = await DataStore.query(Project, id);
        if (foundProject) {
          setIsLoaded(true);
          setProject(foundProject);
          setSelectedTypeIndex(new IndexPath(
            PROJECT_TYPE_DATA.findIndex(({ enumVal }) => enumVal === foundProject.type),
          ));
          setSelectedStatusIndex(new IndexPath(
            PROJECT_STATUS_DATA.findIndex(({ enumVal }) => enumVal === foundProject.status),
          ));
        }
      } catch (e) {
        console.error('Error while reading project', e);
      }
    };

    getProject().then();
  }, [id]);

  React.useEffect(() => {
    // Update weekly target as sum of daily targets
    if (!project) {
      return;
    }
    const sumWeeklyTarget = _(project.wordTarget).values().sumBy('words');

    setWeeklyTarget(sumWeeklyTarget);
  }, [project]);

  const backAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  const renderOption = (title: string): React.ReactElement => (
    <SelectItem key={title} title={title} />
  );

  const handleSave = async () => {
    // TODO - add input validation and error handling
    if (!project) {
      console.log('No project to save!');
      return;
    }
    const savedProject = await DataStore.save(Project.copyOf(project, () => undefined));
    dispatch(projectAdded(serializeModel(savedProject) as unknown as SerializedProject));
    const { title } = project;

    navigation.popToTop();
    navigation.navigate('Details', { id, title });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <TopNavigation title={'Edit Project'} alignment="center" accessoryLeft={backAction} />
        <Divider />
        <Layout style={styles.body}>
          {project && isLoaded
            ? <>
              <Input
                placeholder="Title"
                label="Title"
                value={project.title}
                onChangeText={nextValue => setProject(Project.copyOf(project, draft => {
                  draft.title = nextValue;
                }))}
                size="large"
              />
              <Input
                placeholder="Description"
                label="Description"
                value={project.description}
                onChangeText={nextValue => setProject(Project.copyOf(project, draft => {
                  draft.description = nextValue;
                }))}
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
                  setProject(Project.copyOf(project, draft => {
                    draft.type = PROJECT_TYPE_DATA[indexPath.row].enumVal;
                  }));
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
                  setProject(Project.copyOf(project, draft => {
                    draft.status = PROJECT_STATUS_DATA[selectedTypeIndex.row].enumVal;
                  }));
                }}
              >
                {PROJECT_STATUS_DATA.map(status => renderOption(status.display))}
              </Select>
              <Text appearance="hint">Daily targets</Text>
              <DailyWordRow project={project} setProject={setProject} dayName="Monday" dayKey="mon" />
              <DailyWordRow project={project} setProject={setProject} dayName="Tuesday" dayKey="tue" />
              <DailyWordRow project={project} setProject={setProject} dayName="Wednesday" dayKey="wed" />
              <DailyWordRow project={project} setProject={setProject} dayName="Thursday" dayKey="thu" />
              <DailyWordRow project={project} setProject={setProject} dayName="Friday" dayKey="fri" />
              <DailyWordRow project={project} setProject={setProject} dayName="Saturday" dayKey="sat" />
              <DailyWordRow project={project} setProject={setProject} dayName="Sunday" dayKey="sun" />
              <Text appearance="hint">Weekly target: {weeklyTarget}</Text>
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
  select: {
    width: '100%',
  },
});

export default ProjectNewScreen;
