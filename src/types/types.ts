type RootTabParamList = {
  // ScreenName: Props | undefined
  HomeStackNavigator: undefined;
  ProjectsStackNavigator: undefined;
  SettingsStackNavigator: undefined;
  BrowseStackNavigator: undefined;
}

type HomeStackParamList = {
  Home: undefined;
};

type ProjectsStackParamList = {
  Projects: undefined;
  Details: Required<{ id: string, name: string }>;
};

type SettingsStackParamList = {
  Settings: undefined;
};

type BrowseStackParamList = {
  Browse: undefined;
};

export type {
  RootTabParamList,
  HomeStackParamList,
  ProjectsStackParamList,
  SettingsStackParamList,
  BrowseStackParamList,
};
