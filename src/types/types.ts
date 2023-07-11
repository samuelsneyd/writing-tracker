export type HomeDrawerParamList = {
  // ScreenName: Props | undefined
  RootTabNavigator: undefined;
  SettingsStackNavigator: undefined;
  ProfileStackNavigator: undefined;
}

export type RootTabParamList = {
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
  ProjectDetails: Required<{ id: string, title: string }>;
  ProjectEdit: Required<{ id: string }>;
  ProjectList: undefined;
  ProjectNew: undefined;
  SessionEdit: Required<{ sessionId: string }>;
  SessionList: Required<{ projectId: string }> | undefined;
  SessionNew: Required<{ projectId: string }>;
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

export type ProfileStackParamList = {
  Profile: undefined;
}

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
