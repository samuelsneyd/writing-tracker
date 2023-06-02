import * as React from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { MoreStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, Button } from '@ui-kitten/components';
import useBackNavigation from '../../hooks/useBackNavigation/useBackNavigation';
import { ThemeContext } from '../../themes/theme-context';

type Props = NativeStackScreenProps<MoreStackParamList, 'Themes'>

const ThemesScreen = ({ navigation }: Props): React.ReactElement => {
  const { BackAction } = useBackNavigation(navigation);
  const themeContext = React.useContext(ThemeContext);

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
