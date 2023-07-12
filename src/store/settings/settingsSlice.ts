import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SettingsState = {
  isNotificationsEnabled: boolean;
  // 0: Sunday, 1: Monday
  weekStartsOn: number;
};

const initialState: SettingsState = {
  isNotificationsEnabled: false,
  weekStartsOn: 0,
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
