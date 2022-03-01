/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    chosenSign: '',
    score: 0,
  },
  reducers: {
    incrementScore: (state) => {
      state.score += 1;
    },
    decrementScore: (state) => {
      state.score -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementScore, decrementScore } = gameSlice.actions;

export default gameSlice.reducer;
