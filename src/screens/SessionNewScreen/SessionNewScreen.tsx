import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SerializedSession } from '../../models/serialized';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { sessionAdded } from '../../store/sessions/sessionsSlice';
import { CreateSessionInput } from '../../types/API';
import type { ProjectsStackParamList } from '../../types/types';
import { Project, Session } from '../../models';
import { serializeModel } from '@aws-amplify/datastore/ssr';
import { DataStore } from 'aws-amplify';
import {
  Button,
  Divider,
  Input,
  Layout,
  Spinner,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'NewSession'>

const SessionNewScreen = ({ navigation, route }: Props): React.ReactElement => {
  const { projectId } = route.params;
  const initialSessionValues: CreateSessionInput = {
    date: new Date().toISOString(),
    projectSessionsId: projectId,
    minutes: 0,
    words: 0,
  };
  const [sessionForm, setSessionForm] = React.useState<CreateSessionInput>(initialSessionValues);
  const reduxProjects = useAppSelector(state => state.projects);
  const sessionProject = reduxProjects.find(project => project.id === projectId);
  const dispatch = useAppDispatch();

  const backAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  const handleSave = async () => {
    // TODO - add input validation and error handling
    if (!sessionForm) {
      console.log('No session to save!');
      return;
    }
    const savedSession = await DataStore.save(new Session({
      ...sessionForm,
      project: await DataStore.query(Project, sessionForm.projectSessionsId) as Project,
    }));
    dispatch(sessionAdded(serializeModel(savedSession) as unknown as SerializedSession));

    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <TopNavigation title={'New Session'} alignment="center" accessoryLeft={backAction} />
        <Divider />
        <Layout style={styles.body}>
          {sessionForm && sessionProject
            ? <>
              <Input></Input>
              <Button onPress={handleSave}>Save Session</Button>
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
});

export default SessionNewScreen;
