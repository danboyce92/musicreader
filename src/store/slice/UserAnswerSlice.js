import { createSlice } from '@reduxjs/toolkit';

const UserAnswerSlice = createSlice({
  name: 'userAnswer',
  initialState: {
    userAnswer: '0',
    userCount: 0,
    correctAnswer: '',
    random: '',
    correctChoice: 'false',
  },
  reducers: {
    setUserAnswer(state, action) {
      state.userAnswer = action.payload;
    },
    setUserCount(state) {
      state.userCount = state.userCount++;
    },
    setCorrectAnswer(state, action) {
      state.correctAnswer = action.payload;
    },
    setRandom(state, action) {
      state.random = action.payload;
    },
    setCorrectChoice(state, action) {
      state.correctChoice = action.payload;
    },
  },
});

export const {
  setUserAnswer,
  setUserCount,
  setCorrectAnswer,
  setRandom,
  setCorrectChoice,
} = UserAnswerSlice.actions;
export const userAnswerReducer = UserAnswerSlice.reducer;
