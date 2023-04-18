import React, { useEffect } from 'react';
import Ready from './Ready';
import { useInterval } from './useInterval';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { app } from '../firebase/firebase';
import Timer from './Timer&AnsButtons';
import GameOver from './GameOver';
import GameScreen from './GameScreen';
import SignoutButton from './SignoutButton';
import { questionsArr } from './NoteArrays';
import Graph from './Graph';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleGraph,
  setCorrectAnswer,
  setRandom,
  setCorrectChoice,
  setScorePoints,
} from '../store';
import AnswerButtons from './AnswerButtons';

const MainMenu = ({ user, username }) => {
  const dispatch = useDispatch();

  const {
    timeChosen,
    gameBegin,
    gameOver,
    userAnswer,
    userCount,
    correctAnswer,
    random,
    isRunning,
    scorePoints,
    graphToggle,
  } = useSelector((state) => {
    return {
      timeChosen: state.gameState.timeChosen,
      gameBegin: state.gameState.gameBegin,
      gameOver: state.gameState.gameOver,
      userAnswer: state.userAnswer.userAnswer,
      userCount: state.userAnswer.userCount,
      correctAnswer: state.userAnswer.correctAnswer,
      random: state.userAnswer.random,
      isRunning: state.gameState.isRunning,
      scorePoints: state.gameScore.scorePoints,
      graphToggle: state.gameState.graphToggle,
    };
  });

  const scoreInterval = useInterval(
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

  const handleAnswerCheck = () => {
    let correct = correctAnswer.replace(/[0-9]/g, '');
    let user = userAnswer;
    if (correct === user) {
      dispatch(setCorrectChoice(true));
    }
  };

  const storage = getStorage(app);

  function getVideo() {
    getDownloadURL(ref(storage, `/${random}.mp4`))
      .then((url) => {
        const vid = document.getElementById('myvid');
        vid.setAttribute('src', url);
        const link = vid.getAttribute('src');
        dispatch(setCorrectAnswer(random));
      })
      .catch((error) => {});
  }

  function randomize() {
    let array = [];
    let randomNumber = Math.floor(Math.random() * 41);
    if (array.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 41);
      array.pop();
    }

    array.push(randomNumber);
    let result = questionsArr[randomNumber];

    dispatch(setRandom(result));
  }

  useEffect(() => {
    handleAnswerCheck();
  }, [userCount]);

  return (
    <div className="mainMenu">
      {timeChosen && <Ready />}

      {gameBegin && <Timer randomize={randomize} getVideo={getVideo} />}

      {gameBegin && <AnswerButtons />}

      {gameBegin && <GameScreen />}

      {gameOver && <GameOver username={username} />}

      {graphToggle && <Graph username={username} graphToggle={graphToggle} />}
    </div>
  );
};

export default MainMenu;
