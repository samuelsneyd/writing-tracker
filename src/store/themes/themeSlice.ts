import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';

type ThemeState = {
  value: Theme;
};

const initialState: ThemeState = {
  value: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeSet: (state, action: PayloadAction<Theme>) => {
      state.value = action.payload;
    },
  },
});

export const { themeSet } = themeSlice.actions;

const themeReducer = themeSlice.reducer;

export default themeReducer;
