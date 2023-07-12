import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SettingsState = {
  notificationsEnabled: boolean;
  // 0: Sunday, 1: Monday
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  tabBarIndicator: boolean;
};

const initialState: SettingsState = {
  notificationsEnabled: false,
  weekStartsOn: 0,
  tabBarIndicator: true,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    settingsSet: (state, action: PayloadAction<SettingsState>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { settingsSet } = settingsSlice.actions;

const settingsReducer = settingsSlice.reducer;

export default settingsReducer;
