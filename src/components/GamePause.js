import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsPaused,
  toggleIsRunning,
  setScorePoints,
  setCorrectChoice,
  setScore,
} from '../store';
// import '../styles/MainMenu.css';

const GamePause = ({ randomize, getVideo }) => {
  const dispatch = useDispatch();
  const { score, scorePoints, userAnswer, correctAnswer, correctChoice } =
    useSelector((state) => {
      return {
        score: state.gameScore.score,
        scorePoints: state.gameScore.scorePoints,
        userAnswer: state.userAnswer.userAnswer,
        correctAnswer: state.userAnswer.correctAnswer,
        correctChoice: state.userAnswer.correctChoice,
      };
    });
  //Displays score screen
  const [toScore, setToScore] = useState(false);

  const handleUpdateScore = () => {
    if (correctChoice) {
      if (scorePoints > 100) {
        dispatch(setScore(score + scorePoints));
      } else {
        dispatch(setScore(score + 100));
      }
    }
  };

  const scoreButton = () => {
    setToScore(true);
    handleUpdateScore();
    randomize();
  };

  const continueButton = () => {
    setToScore(false);
    dispatch(setCorrectChoice(false));
    dispatch(setIsPaused(false));
    //Triggers countdown timer
    dispatch(toggleIsRunning(true));
    //To reset scorepoints
    dispatch(setScorePoints(500));
    getVideo();
  };

  let displayAnswer = correctAnswer.replace(/[0-9]/g, '');

  const roundPoints = () => {
    if (scorePoints < 100) {
      return 100;
    } else {
      return scorePoints;
    }
  };

  return (
    <div className="gamePause">
      <div className="choice">You chose : {userAnswer} </div>
      {correctChoice && (
        <div className="correct">
          You are correct! you have gained {roundPoints()} points!
        </div>
      )}

      {!correctChoice && <div className="incorrect">You are incorrect.</div>}

      {!toScore && (
        <button
          className="ui semantic inverted large green button"
          id="scoreButt"
          onClick={() => {
            scoreButton();
          }}
        >
          See current score
        </button>
      )}

      {toScore && <div className="currentScoreIs">Your score is : {score}</div>}

      {toScore && (
        <button
          className="ui semantic inverted large green button"
          id="contButt"
          onClick={() => {
            continueButton();
          }}
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default GamePause;
