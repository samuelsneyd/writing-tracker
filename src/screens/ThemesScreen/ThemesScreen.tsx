import * as React from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { themeSet } from '../../store/themes/themeSlice';
import type { MoreStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, Button, TopNavigationAction } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<MoreStackParamList, 'Themes'>

const ThemesScreen = ({ navigation }: Props): React.ReactElement => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.theme).value;

  // TODO - handle multiple themes beyond light/dark
  const handleThemeChange = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(themeSet(nextTheme));
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Themes" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Themes</Text>
        <Button onPress={handleThemeChange}>Toggle light/dark mode</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default ThemesScreen;
