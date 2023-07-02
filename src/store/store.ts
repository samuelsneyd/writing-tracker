import { configureStore } from '@reduxjs/toolkit';
import awardsReducer from './awards/awardsSlice';
import projectsReducer from './projects/projectsSlice';
import sessionsReducer from './sessions/sessionsSlice';
import themeReducer from './themes/themeSlice';

export const store = configureStore({
  reducer: {
    awards: awardsReducer,
    projects: projectsReducer,
    sessions: sessionsReducer,
    theme: themeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
