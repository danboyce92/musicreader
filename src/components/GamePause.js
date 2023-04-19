import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsPaused,
  toggleIsRunning,
  setScorePoints,
  setCorrectChoice,
  setScore,
  setRandom,
  setCorrectAnswer,
} from '../store';
import { questionsArr } from './NoteArrays';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { app } from '../firebase/firebase';
// import '../styles/MainMenu.css';

const GamePause = () => {
  const dispatch = useDispatch();
  const {
    score,
    scorePoints,
    userAnswer,
    correctAnswer,
    correctChoice,
    random,
    userCount,
  } = useSelector((state) => {
    return {
      score: state.gameScore.score,
      scorePoints: state.gameScore.scorePoints,
      userAnswer: state.userAnswer.userAnswer,
      correctAnswer: state.userAnswer.correctAnswer,
      correctChoice: state.userAnswer.correctChoice,
      random: state.userAnswer.random,
      userCount: state.userAnswer.userCount,
    };
  });
  //Displays score screen
  const [toScore, setToScore] = useState(false);

  function randomize() {
    let randomNumber = Math.floor(Math.random() * 41);
    let result = questionsArr[randomNumber];

    dispatch(setRandom(result));
  }

  const storage = getStorage(app);

  function getVideo() {
    getDownloadURL(ref(storage, `/${random}.mp4`))
      .then((url) => {
        const vid = document.getElementById('myvid');
        vid.setAttribute('src', url);
        vid.getAttribute('src');
        dispatch(setCorrectAnswer(random));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleAnswerCheck = () => {
    let correct = correctAnswer.slice(0, -1);
    let user = userAnswer;
    if (correct === user) {
      dispatch(setCorrectChoice(true));
    }
  };

  useEffect(() => {
    handleAnswerCheck();
  }, [userCount]);

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
