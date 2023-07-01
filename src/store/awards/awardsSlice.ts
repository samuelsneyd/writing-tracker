import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SerializedAward } from '../../models/serialized';

const initialState: SerializedAward[] = [];

export const awardsSlice = createSlice({
  name: 'awards',
  initialState,
  reducers: {
    awardAdded: (state, action: PayloadAction<SerializedAward>) => {
      const foundIndex = state.findIndex(award => award.id === action.payload.id);

      if (foundIndex === -1) {
        state.push(action.payload);
      } else {
        state.splice(foundIndex, 1, action.payload);
      }
    },

    awardsAdded: (state, action: PayloadAction<SerializedAward[]>) => {
      if (Array.isArray(action.payload)) {
        return state.concat(action.payload);
      }
    },

    awardsSet: (state, action: PayloadAction<SerializedAward[]>) => {
      if (Array.isArray(action.payload)) {
        return action.payload;
      }
    },

    awardRemoved: (state, action: PayloadAction<SerializedAward>) => {
      const indexToDelete = state.findIndex(award => award.id === action.payload.id);

      if (indexToDelete !== -1) {
        state.splice(indexToDelete, 1);
      }
    },

    awardsRemoved: (state, action: PayloadAction<SerializedAward[]>) => {
      // TODO
    },
  },
});

export const { awardAdded, awardsAdded, awardsSet, awardRemoved, awardsRemoved } = awardsSlice.actions;

const awardsReducer = awardsSlice.reducer;

export default awardsReducer;
