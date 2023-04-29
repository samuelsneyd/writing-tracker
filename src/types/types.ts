type RootTabParamList = {
  // ScreenName: Props | undefined
  HomeStackNavigator: undefined;
  ProjectsStackNavigator: undefined;
  AddDataStackNavigator: undefined;
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

type AddDataStackParamList = {
  AddData: undefined;
}

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
  AddDataStackParamList,
  SettingsStackParamList,
  BrowseStackParamList,
};
