/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    chosenSign: '',
    score: 0,
    gameStage: 'initial',
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
    changeGameStage: (state) => {
      if (state.gameStage === 'initial') {
        state.gameStage = 'results';
      } else {
        state.gameStage = 'initial';
      }
    },
  },
});

export const {
  incrementScore, decrementScore, changeSign, changeGameStage,
} = gameSlice.actions;

export default gameSlice.reducer;
