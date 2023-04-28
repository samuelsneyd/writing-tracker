type RootStackParamList = {
  // ScreenName: Props | undefined
  Home: undefined;
  Details: Required<{ id: string }>;
};

export type { RootStackParamList };
