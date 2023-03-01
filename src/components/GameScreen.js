import React from 'react';
import '../styles/GameScreen.css';
import Questions from './Questions';

const GameScreen = ({ gameBegin, user, score, username }) => {
  return (
    <div className="gameScreen">
      {gameBegin && <Questions />}

      {gameBegin && (
        <h3 className="currentScore">Your current score is : {score}</h3>
      )}

      <h3 className="loggedIn">User: {user ? user.email : 'Not logged in'} </h3>
    </div>
  );
};

export default GameScreen;
