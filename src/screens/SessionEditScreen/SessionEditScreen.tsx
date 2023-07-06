import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SerializedSession } from '../../models/serialized';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { sessionAdded } from '../../store/sessions/sessionsSlice';
import type { ProjectsStackParamList } from '../../types/types';
import { Project, Session } from '../../models';
import { deserializeModel, serializeModel } from '@aws-amplify/datastore/ssr';
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

type Props = NativeStackScreenProps<ProjectsStackParamList, 'EditSession'>

const SessionEditScreen = ({ navigation, route }: Props): React.ReactElement => {
  const { sessionId } = route.params;
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);
  const foundSession = reduxSessions.find(session => session.id === sessionId);
  const foundProject = reduxProjects.find(project => project.id === foundSession?.projectSessionsId);

  // Try read from redux first
  let foundReduxSession: Session | undefined;
  try {
    if (foundSession) {
      foundReduxSession = deserializeModel(Session, foundSession as unknown as Session);
    }
  } catch (e) {
    foundReduxSession = undefined;
  }

  // Try read from redux first
  let foundReduxProject: Project | undefined;
  try {
    if (foundProject) {
      foundReduxProject = deserializeModel(Project, foundProject as unknown as Project);
    }
  } catch (e) {
    foundReduxProject = undefined;
  }

  const [isLoaded, setIsLoaded] = React.useState<boolean>(!!foundReduxSession && !!foundReduxProject);
  const [session, setSession] = React.useState<Session | undefined>(foundReduxSession);
  const [project, setProject] = React.useState<Project | undefined>(foundReduxProject);
  const dispatch = useAppDispatch();

  const backAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  const handleSave = async () => {
    // TODO - add input validation and error handling
    if (!session) {
      console.log('No session to save!');
      return;
    }
    const savedSession = await DataStore.save(Session.copyOf(session, () => undefined));
    dispatch(sessionAdded(serializeModel(savedSession) as unknown as SerializedSession));

    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title={'New Session'} alignment="center" accessoryLeft={backAction} />
      <Divider />
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Layout style={styles.body}>
          {session && project && isLoaded
            ? <>
              <Text category="h5" appearance="hint">{project.title}</Text>
              <Layout style={styles.horizontalContainer}>
                <Input
                  style={styles.input}
                  placeholder="0"
                  label="Words"
                  value={session.words ? session.words.toString() : ''}
                  onChangeText={nextValue => {
                    const nextIntValue = parseInt(nextValue.replace(/\D/g, '')) || 0;
                    setSession(Session.copyOf(session, draft => {
                      draft.words = nextIntValue;
                    }));
                  }}
                  keyboardType="number-pad"
                  size="large"
                ></Input>
                <Input
                  style={styles.input}
                  placeholder="0"
                  label="Minutes"
                  value={session.minutes ? session.minutes.toString() : ''}
                  onChangeText={nextValue => {
                    const nextIntValue = parseInt(nextValue.replace(/\D/g, '')) || 0;
                    setSession(Session.copyOf(session, draft => {
                      draft.minutes = nextIntValue;
                    }));
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

export default SessionEditScreen;
