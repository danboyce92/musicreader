import { createSlice } from '@reduxjs/toolkit';

const GameStateSlice = createSlice({
  name: 'gameState',
  initialState: {
    gameBegin: false,
    gameOver: false,
    timeChosen: false,
    graphToggle: false,
    gameTime: 0,
    isRunning: false,
    isPaused: false,
  },
  reducers: {
    toggleGameBegin(state) {
      state.gameBegin = !state.gameBegin;
    },
    toggleGameOver(state, action) {
      state.gameOver = action.payload;
    },
    toggleTimeChosen(state) {
      state.timeChosen = !state.timeChosen;
    },
    toggleGraph(state) {
      state.graphToggle = !state.graphToggle;
    },
    setGameTime(state, action) {
      state.gameTime = action.payload;
    },
    toggleIsRunning(state) {
      state.isRunning = !state.isRunning;
    },
    setIsPaused(state, action) {
      state.isPaused = action.payload;
    },
  },
});

export const {
  toggleGameBegin,
  toggleGameOver,
  toggleTimeChosen,
  toggleGraph,
  setGameTime,
  toggleIsRunning,
  setIsPaused,
} = GameStateSlice.actions;
export const gameStateReducer = GameStateSlice.reducer;
