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
        key={ans.note}
        id={`ansBut${ans.note}`}
        className="ui big button"
        onClick={() => {
          pause();
          //Extracts user's answer
          dispatch(setUserAnswer(ans.note));
          //To fix Bug if user answers same twice can still be correct
          dispatch(setUserCount(userCount + 1));
        }}
      >
        {ans.butt}
      </button>
    );
  });

  return <div className="answerButtons">{!isPaused && map}</div>;
};

export default AnswerButtons;
