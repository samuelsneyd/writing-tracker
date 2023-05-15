export type RootTabParamList = {
  // ScreenName: Props | undefined
  HomeStackNavigator: undefined;
  ProjectsStackNavigator: undefined;
  AddDataStackNavigator: undefined;
  GoalsStackNavigator: undefined;
  MoreStackNavigator: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type ProjectsStackParamList = {
  Projects: undefined;
  Details: Required<{ id: string, name: string }>;
};

export type AddDataStackParamList = {
  AddData: undefined;
};

export type GoalsStackParamList = {
  Goals: undefined;
};

export type MoreStackParamList = {
  More: undefined;
  Awards: undefined;
  Themes: undefined;
  Challenges: undefined;
  Charts: undefined;
  Settings: undefined;
};

export type SettingsStackParamList = {
  Settings: undefined;
};

export type Quote = {
  quote: string;
  author: string;
};

export type DateStreakSummary = {
  currentStreak: number;
  longestStreak: number;
  streaks: number[];
  todayInStreak: boolean;
  withinCurrentStreak: boolean;
};
