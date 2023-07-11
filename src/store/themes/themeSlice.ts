import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';
type ThemeSystem = 'eva' | 'material';
type ThemeName = string;

type ThemeState = {
  colorMode: ThemeMode;
  themeName: ThemeName;
  designSystem: ThemeSystem;
};

const initialState: ThemeState = {
  colorMode: 'light',
  themeName: 'rainbowTheme',
  designSystem: 'eva',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeSet: (state, action: PayloadAction<ThemeName>) => {
      state.themeName = action.payload;
    },

    colorModeSet: (state, action: PayloadAction<ThemeMode>) => {
      state.colorMode = action.payload;
    },

    designSystemSet: (state, action: PayloadAction<ThemeSystem>) => {
      state.designSystem = action.payload;
    },
  },
});

export const { themeSet, colorModeSet, designSystemSet } = themeSlice.actions;

const themeReducer = themeSlice.reducer;

export default themeReducer;
