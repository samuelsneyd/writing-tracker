import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any[] = [];

// TODO - add typescript types

export const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    sessionAdded: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
    },

    sessionsAdded: (state, action: PayloadAction<any>) => {
      if (Array.isArray(action.payload)) {
        return state.concat(action.payload);
      }
    },

    sessionsSet: (state, action: PayloadAction<any>) => {
      if (Array.isArray(action.payload)) {
        return action.payload;
      }
    },

    sessionRemoved: (state, action: PayloadAction<any>) => {
      const indexToDelete = state.findIndex(session => session.id === action.payload.id);
      if (indexToDelete !== -1) {
        state.splice(indexToDelete, 1);
      }
    },

    sessionsRemoved: (state, action) => {
      // TODO
    },
  },
});

export const { sessionAdded, sessionsAdded, sessionsSet, sessionRemoved, sessionsRemoved } = sessionsSlice.actions;

const sessionsReducer = sessionsSlice.reducer;

export default sessionsReducer;
