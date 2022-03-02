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
    changeSign: (state, action) => {
      state.chosenSign = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementScore, decrementScore, changeSign } = gameSlice.actions;

export default gameSlice.reducer;
