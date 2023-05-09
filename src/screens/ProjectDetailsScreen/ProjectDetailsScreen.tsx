import * as React from 'react';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../../types/types';
import { DataStore } from 'aws-amplify';
import { Project, TimeWriting, WordCount } from '../../models';
import { Layout, TopNavigation, Text, Divider } from '@ui-kitten/components';
import useBackNavigation from '../../hooks/useBackNavigation/useBackNavigation';
import { capitalCase } from 'change-case';
import { titleCase } from 'title-case';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'Details'>

const ProjectDetailsScreen = ({ route, navigation }: Props) => {
  const [project, setProject] = useState<Project>();
  const [wordCounts, setWordCounts] = useState<WordCount[]>([]);
  const [writingTimes, setWritingTimes] = useState<TimeWriting[]>([]);
  const { BackAction } = useBackNavigation(navigation);

  useEffect(() => {
    DataStore.query(Project, id).then(result => {
      setProject(result);
      result?.wordCounts.toArray().then(results => {
        setWordCounts(results);
      });
      result?.writingTimes.toArray().then(results => {
        setWritingTimes(results);
      });
    });
  }, []);
  const { id, name } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title={name} alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {project
          ? <>
            <Text category="h1">{capitalCase(project.projectType)}</Text>
            <Text>{titleCase(project.name)}</Text>
            {wordCounts.map(wordCount => <Text key={wordCount.id}>{wordCount.words} words</Text>)}
            {writingTimes.map(writingTime => <Text key={writingTime.id}>{writingTime.minutes} minutes</Text>)}
          </>
          : <Text>No project found!</Text>
        }
      </Layout>
    </SafeAreaView>
  );
};

export default ProjectDetailsScreen;
