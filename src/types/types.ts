type RootStackParamList = {
  // ScreenName: Props | undefined
  Home: undefined;
  Details: Required<{ id: string, name: string }>;
};

type RootTabParamList = {
  // ScreenName: Props | undefined
  Home: undefined;
  Projects: undefined;
  Settings: undefined;
  Browse: undefined;
}

export type { RootStackParamList, RootTabParamList };
