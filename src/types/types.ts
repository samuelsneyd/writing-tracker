export type RootTabParamList = {
  // ScreenName: Props | undefined
  HomeStackNavigator: undefined;
  ProjectsStackNavigator: undefined;
  ChartsStackNavigator: undefined;
  GoalsStackNavigator: undefined;
  MoreStackNavigator: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type ProjectsStackParamList = {
  Projects: undefined;
  Details: Required<{ id: string, title: string }>;
  EditProject: Required<{ id: string, title: string }>;
  NewProject: undefined;
  ListSessions: Partial<{ projectId: string }>;
  EditSession: Required<{ projectId: string, sessionId: string }>;
  NewSession: Required<{ projectId: string }>;
};

export type AddDataStackParamList = {
  AddData: undefined;
};

export type ChartsStackParamList = {
  Charts: undefined;
};

export type GoalsStackParamList = {
  Goals: undefined;
};

export type MoreStackParamList = {
  More: undefined;
  Awards: undefined;
  Themes: undefined;
  Challenges: undefined;
  Goals: undefined;
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
