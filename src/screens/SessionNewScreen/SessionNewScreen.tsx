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
  Text,
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
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
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

    setIsSaving(true);

    try {
      const savedSession = await DataStore.save(new Session({
        ...sessionForm,
        project: await DataStore.query(Project, sessionForm.projectSessionsId) as Project,
      }));
      dispatch(sessionAdded(serializeModel(savedSession) as unknown as SerializedSession));

      navigation.pop();
    } catch (e) {
      // TODO - show error message
      setIsSaving(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="New Session" alignment="center" accessoryLeft={backAction} />
      <Divider />
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Layout style={styles.body}>
          {sessionForm && sessionProject && !isSaving
            ? <>
              <Text category="h5" appearance="hint">{sessionProject.title}</Text>
              <Layout style={styles.horizontalContainer}>
                <Input
                  style={styles.input}
                  placeholder="0"
                  label="Words"
                  value={sessionForm.words ? sessionForm.words.toString() : ''}
                  onChangeText={nextValue => {
                    const nextIntValue = parseInt(nextValue.replace(/\D/g, '')) || 0;
                    setSessionForm({ ...sessionForm, words: nextIntValue });
                  }}
                  keyboardType="number-pad"
                  size="large"
                ></Input>
                <Input
                  style={styles.input}
                  placeholder="0"
                  label="Minutes"
                  value={sessionForm.minutes ? sessionForm.minutes.toString() : ''}
                  onChangeText={nextValue => {
                    const nextIntValue = parseInt(nextValue.replace(/\D/g, '')) || 0;
                    setSessionForm({ ...sessionForm, minutes: nextIntValue });
                  }}
                  keyboardType="number-pad"
                  size="large"
                ></Input>
              </Layout>
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
  horizontalContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
  },
});

export default SessionNewScreen;
