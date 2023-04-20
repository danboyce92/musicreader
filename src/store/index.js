import { configureStore } from '@reduxjs/toolkit';
import {
  gameStateReducer,
  toggleGameBegin,
  toggleGameOver,
  toggleTimeChosen,
  toggleGraph,
  setGameTime,
  toggleIsRunning,
  setIsPaused,
} from './slice/GameStateSlice';
import {
  userAnswerReducer,
  setUserAnswer,
  setUserCount,
  setCorrectAnswer,
  setRandom,
  setCorrectChoice,
} from './slice/UserAnswerSlice';
import {
  gameScoreReducer,
  setScore,
  setScorePoints,
} from './slice/GameScoreSlice';

const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
    userAnswer: userAnswerReducer,
    gameScore: gameScoreReducer,
  },
});

export {
  store,
  toggleGameBegin,
  toggleGameOver,
  toggleTimeChosen,
  toggleGraph,
  setGameTime,
  toggleIsRunning,
  setUserAnswer,
  setUserCount,
  setCorrectAnswer,
  setRandom,
  setCorrectChoice,
  setScore,
  setScorePoints,
  setIsPaused,
};
