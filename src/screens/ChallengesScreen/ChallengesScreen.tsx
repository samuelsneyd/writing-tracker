import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MoreStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, TopNavigationAction } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<MoreStackParamList, 'Challenges'>

const ChallengesScreen = ({ navigation }: Props): React.ReactElement => {
  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Challenges" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Challenges</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default ChallengesScreen;
