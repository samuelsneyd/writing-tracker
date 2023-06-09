import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../models';

const initialState: Project[] = [];

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    projectAdded: (state, action: PayloadAction<Project>) => {
      state.push(action.payload);
    },

    projectsAdded: (state, action: PayloadAction<Project[]>) => {
      state.push(...action.payload);
    },

    projectRemoved: (state, action) => {
      // TODO
    },

    projectsRemoved: (state, action) => {
      // TODO
    },
  },
});

export const { projectAdded, projectsAdded, projectRemoved, projectsRemoved } = projectsSlice.actions;

const projectsReducer = projectsSlice.reducer;

export default projectsReducer;
