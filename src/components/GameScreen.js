import React from 'react';
import { useSelector } from 'react-redux';
// import '../styles/GameScreen.css';
import Questions from './Questions';

const GameScreen = () => {
  const { gameBegin, score } = useSelector((state) => {
    return {
      gameBegin: state.gameState.gameBegin,
      score: state.gameScore.score,
    };
  });

  return <div className="gameScreen">{gameBegin && <Questions />}</div>;
};

export default GameScreen;
