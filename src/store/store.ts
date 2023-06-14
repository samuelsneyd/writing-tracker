import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projects/projectsSlice';
import sessionsReducer from './sessions/sessionsSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    sessions: sessionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
