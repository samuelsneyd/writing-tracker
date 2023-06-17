import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SerializedSession } from '../../models/serialized';

const initialState: SerializedSession[] = [];

export const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    sessionAdded: (state, action: PayloadAction<SerializedSession>) => {
      const foundIndex = state.findIndex(session => session.id === action.payload.id);

      if (foundIndex === -1) {
        state.push(action.payload);
      } else {
        state.splice(foundIndex, 1, action.payload);
      }
    },

    sessionsAdded: (state, action: PayloadAction<SerializedSession[]>) => {
      if (Array.isArray(action.payload)) {
        return state.concat(action.payload);
      }
    },

    sessionsSet: (state, action: PayloadAction<SerializedSession[]>) => {
      if (Array.isArray(action.payload)) {
        return action.payload;
      }
    },

    sessionRemoved: (state, action: PayloadAction<SerializedSession>) => {
      const indexToDelete = state.findIndex(session => session.id === action.payload.id);

      if (indexToDelete !== -1) {
        state.splice(indexToDelete, 1);
      }
    },

    sessionsRemoved: (state, action: PayloadAction<SerializedSession[]>) => {
      // TODO
    },
  },
});

export const { sessionAdded, sessionsAdded, sessionsSet, sessionRemoved, sessionsRemoved } = sessionsSlice.actions;

const sessionsReducer = sessionsSlice.reducer;

export default sessionsReducer;
