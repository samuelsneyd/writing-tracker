import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { noCase } from 'change-case';
import { titleCase } from 'title-case';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { colorModeSet, designSystemSet, themeSet } from '../../store/themes/themeSlice';
import { themesList } from '../../themes';
import type { MoreStackParamList } from '../../types/types';
import { Divider, Layout, TopNavigation, Text, Button, TopNavigationAction } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../../components/Icons/Icons';

type Props = NativeStackScreenProps<MoreStackParamList, 'Themes'>

const ThemesScreen = ({ navigation }: Props): React.ReactElement => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.theme);

  const handleColorModeChange = () => {
    const nextColorMode = theme.colorMode === 'light' ? 'dark' : 'light';
    dispatch(colorModeSet(nextColorMode));
  };

  const handleDesignSystemChange = () => {
    const nextDesignSystem = theme.designSystem === 'eva' ? 'material' : 'eva';
    dispatch(designSystemSet(nextDesignSystem));
  };

  const handleThemeChange = (theme: string): void => {
    dispatch(themeSet(theme));
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Themes" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Layout style={styles.body}>
          <Text category="h1">Themes</Text>
          <Button onPress={handleColorModeChange}>Toggle light/dark mode</Button>
          <Button onPress={handleDesignSystemChange}>Toggle design system</Button>
          {themesList.map(theme =>
            <Button key={theme} onPress={() => handleThemeChange(theme)}>
              <Text>{titleCase(noCase(theme))}</Text>
            </Button>,
          )}
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
    gap: 8,
  },
});

export default ThemesScreen;
