import * as React from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import { Project, ProjectStatus, ProjectType } from '../../models';
import { Divider, IndexPath, Input, Layout, Select, SelectItem, TopNavigation } from '@ui-kitten/components';
import { capitalCase } from 'change-case';
import useBackNavigation from '../../hooks/useBackNavigation/useBackNavigation';

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
  const [project, setProject] = React.useState<Project>(new Project({
    name: '',
    description: '',
    projectType: ProjectType.BOOK,
    status: ProjectStatus.IN_PROGRESS,
    wordTarget: {
      mon: { enabled: true, words: 0 },
      tue: { enabled: true, words: 0 },
      wed: { enabled: true, words: 0 },
      thu: { enabled: true, words: 0 },
      fri: { enabled: true, words: 0 },
      sat: { enabled: false, words: 0 },
      sun: { enabled: false, words: 0 },
    },
    wordsPerPage: 300
  }));

  const { BackAction } = useBackNavigation(navigation);

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
      </Layout>
    </SafeAreaView>
  );
};

export default ProjectNewScreen;
