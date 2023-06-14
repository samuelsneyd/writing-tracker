import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any[] = [];

// TODO - add typescript types

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    projectAdded: (state, action: PayloadAction<any>) => {
      const foundIndex = state.findIndex(project => project.id === action.payload.id);

      if (foundIndex === -1) {
        state.push(action.payload);
      } else {
        state.splice(foundIndex, 1, action.payload);
      }
    },

    projectsAdded: (state, action: PayloadAction<any>) => {
      if (Array.isArray(action.payload)) {
        return state.concat(action.payload);
      }
    },

    projectsSet: (state, action: PayloadAction<any>) => {
      if (Array.isArray(action.payload)) {
        return action.payload;
      }
    },

    projectRemoved: (state, action: PayloadAction<any>) => {
      const indexToDelete = state.findIndex(project => project.id === action.payload.id);

      if (indexToDelete !== -1) {
        state.splice(indexToDelete, 1);
      }
    },

    projectsRemoved: (state, action) => {
      // TODO
    },
  },
});

export const { projectAdded, projectsAdded, projectsSet, projectRemoved, projectsRemoved } = projectsSlice.actions;

const projectsReducer = projectsSlice.reducer;

export default projectsReducer;
