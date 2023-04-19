import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleIsRunning,
  toggleGameOver,
  setUserCount,
  setUserAnswer,
  toggleGameBegin,
  setIsPaused,
} from '../store';
import { useInterval } from './useInterval';
import { userAnswers } from './NoteArrays';
import GamePause from './GamePause';
// import '../styles/MainMenu.css';
// import '../styles/AnswerButtons.css';

const Timer = () => {
  const dispatch = useDispatch();

  const { gameTime, isRunning, userCount, isPaused } = useSelector((state) => {
    return {
      gameTime: state.gameState.gameTime,
      isRunning: state.gameState.isRunning,
      userCount: state.userAnswer.userCount,
      isPaused: state.gameState.isPaused,
    };
  });

  const [seconds, setSeconds] = useState(gameTime);

  //Timing and scoring logic
  const interval = useInterval(
    () => {
      countdownTimer();
    },
    isRunning ? 1000 : null
  );

  const countdownTimer = () => {
    setSeconds(seconds - 1);

    const countDownEl = document.getElementById('countdown');

    let minutes = Math.floor(seconds / 60);
    let realSec = seconds % 60;

    realSec = realSec < 10 ? '0' + realSec : realSec;

    countDownEl.innerHTML = `${minutes}:${realSec}`;

    if (seconds <= -1) {
      clearInterval(interval);
      //Pauses countdown timer
      dispatch(toggleIsRunning(false));
      //Triggers timer and game to begin
      dispatch(toggleGameBegin());
      //Triggers game over screen when time reaches 0
      dispatch(toggleGameOver(true));
    }
  };

  return <div className="timer" id="countdown"></div>;
};

export default Timer;
