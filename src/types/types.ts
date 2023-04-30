type RootTabParamList = {
  // ScreenName: Props | undefined
  HomeStackNavigator: undefined;
  ProjectsStackNavigator: undefined;
  AddDataStackNavigator: undefined;
  GoalsStackNavigator: undefined;
  BrowseStackNavigator: undefined;
};

type HomeStackParamList = {
  Home: undefined;
};

type ProjectsStackParamList = {
  Projects: undefined;
  Details: Required<{ id: string, name: string }>;
};

type AddDataStackParamList = {
  AddData: undefined;
};

type GoalsStackParamList = {
  Goals: undefined;
};

type BrowseStackParamList = {
  Browse: undefined;
};

type SettingsStackParamList = {
  Settings: undefined;
};

type Quote = {
  quote: string;
  author: string;
};

export type {
  RootTabParamList,
  HomeStackParamList,
  ProjectsStackParamList,
  AddDataStackParamList,
  GoalsStackParamList,
  BrowseStackParamList,
  SettingsStackParamList,
  Quote,
};
