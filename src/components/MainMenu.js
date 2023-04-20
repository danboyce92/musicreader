import React from 'react';
import Ready from './Ready';
import { useInterval } from './useInterval';
import GamePause from './GamePause';
import GameOver from './GameOver';
import GameScreen from './GameScreen';
import Graph from './Graph';
import { useDispatch, useSelector } from 'react-redux';
import { setScorePoints } from '../store';

const MainMenu = ({ username }) => {
  const dispatch = useDispatch();

  const {
    timeChosen,
    gameBegin,
    gameOver,
    isRunning,
    scorePoints,
    graphToggle,
    isPaused,
  } = useSelector((state) => {
    return {
      timeChosen: state.gameState.timeChosen,
      gameBegin: state.gameState.gameBegin,
      gameOver: state.gameState.gameOver,
      isRunning: state.gameState.isRunning,
      scorePoints: state.gameScore.scorePoints,
      graphToggle: state.gameState.graphToggle,
      isPaused: state.gameState.isPaused,
    };
  });

  useInterval(
    () => {
      scoreLogic();
    },
    isRunning ? 10 : null
  );

  const scoreLogic = () => {
    if (isRunning) {
      dispatch(setScorePoints(scorePoints - 1));
    }
  };

  return (
    <div className="mainMenu">
      {timeChosen && <Ready />}

      {gameBegin && <GameScreen />}

      {isPaused && <GamePause />}

      {gameOver && <GameOver username={username} />}

      {graphToggle && <Graph username={username} />}
    </div>
  );
};

export default MainMenu;
