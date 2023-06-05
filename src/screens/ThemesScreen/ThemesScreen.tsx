import * as React from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { MoreStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, Button, TopNavigationAction } from '@ui-kitten/components';
import { ThemeContext } from '../../themes/theme-context';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<MoreStackParamList, 'Themes'>

const ThemesScreen = ({ navigation }: Props): React.ReactElement => {
  const themeContext = React.useContext(ThemeContext);

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Themes" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Themes</Text>
        <Button onPress={themeContext.toggleTheme}>Toggle light/dark mode</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default ThemesScreen;
