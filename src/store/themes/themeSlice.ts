import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';
type Theme = string;

type ThemeState = {
  colorMode: ThemeMode
  themeValue: Theme;
};

const initialState: ThemeState = {
  colorMode: 'light',
  themeValue: 'rainbowTheme',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeSet: (state, action: PayloadAction<Theme>) => {
      state.themeValue = action.payload;
    },

    colorModeSet: (state, action: PayloadAction<ThemeMode>) => {
      state.colorMode = action.payload;
    },
  },
});

export const { themeSet, colorModeSet } = themeSlice.actions;

const themeReducer = themeSlice.reducer;

export default themeReducer;
