import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAnswers } from './NoteArrays';
import {
  setIsPaused,
  toggleIsRunning,
  setUserAnswer,
  setUserCount,
} from '../store';

const AnswerButtons = () => {
  const dispatch = useDispatch();
  const { isPaused, userCount } = useSelector((state) => {
    return {
      isPaused: state.gameState.isPaused,
      userCount: state.userAnswer.userCount,
    };
  });

  const pause = () => {
    dispatch(setIsPaused(true));
    //Pauses countdown timer
    dispatch(toggleIsRunning(false));
  };

  const map = userAnswers.map((ans) => {
    return (
      <button
        key={ans}
        id={`ansBut${ans}`}
        className="ui big button"
        onClick={() => {
          pause();
          //Extracts user's answer
          dispatch(setUserAnswer(ans));
          //To fix Bug if user answers same twice can still be correct
          dispatch(setUserCount(userCount + 1));
        }}
      >
        {ans}
      </button>
    );
  });

  return <div>{!isPaused && <div className="answerButtons">{map}</div>}</div>;
};

export default AnswerButtons;
