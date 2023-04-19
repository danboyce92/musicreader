import React from 'react';
import { useSelector } from 'react-redux';
// import '../styles/GameScreen.css';
import AnswerButtons from './AnswerButtons';
import Questions from './Questions';

const GameScreen = () => {
  const { gameBegin, score, isRunning } = useSelector((state) => {
    return {
      gameBegin: state.gameState.gameBegin,
      score: state.gameScore.score,
      isRunning: state.gameState.isRunning,
    };
  });

  return (
    <div className="gameScreen">
      {gameBegin && isRunning && <Questions />}

      {gameBegin && <AnswerButtons />}
    </div>
  );
};

export default GameScreen;
