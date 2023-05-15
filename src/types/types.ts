type RootTabParamList = {
  // ScreenName: Props | undefined
  HomeStackNavigator: undefined;
  ProjectsStackNavigator: undefined;
  AddDataStackNavigator: undefined;
  GoalsStackNavigator: undefined;
  MoreStackNavigator: undefined;
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

type MoreStackParamList = {
  More: undefined;
  Awards: undefined;
  Themes: undefined;
  Challenges: undefined;
  Charts: undefined;
  Settings: undefined;
};

type SettingsStackParamList = {
  Settings: undefined;
};

type Quote = {
  quote: string;
  author: string;
};

type DateStreakSummary = {
  currentStreak: number;
  longestStreak: number;
  streaks: number[];
  todayInStreak: boolean;
  withinCurrentStreak: boolean;
};

export type {
  RootTabParamList,
  HomeStackParamList,
  ProjectsStackParamList,
  AddDataStackParamList,
  GoalsStackParamList,
  MoreStackParamList,
  SettingsStackParamList,
  DateStreakSummary,
  Quote,
};
