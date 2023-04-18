import { createSlice } from '@reduxjs/toolkit';

const GameScoreSlice = createSlice({
  name: 'gameScore',
  initialState: {
    score: 0,
    scorePoints: 500,
  },
  reducers: {
    setScore(state, action) {
      state.score = action.payload;
    },
    setScorePoints(state, action) {
      state.scorePoints = action.payload;
    },
  },
});

export const { setScore, setScorePoints } = GameScoreSlice.actions;
export const gameScoreReducer = GameScoreSlice.reducer;
