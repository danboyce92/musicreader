import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTimeChosen, setGameTime, setRandom } from '../store';
import { questionsArr } from './NoteArrays';

const TimerOptions = ({ id, time, disp }) => {
  const dispatch = useDispatch();

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

  const handleGameTimeOne = async (time) => {
    dispatch(toggleTimeChosen());
    dispatch(setGameTime(time));
    randomize();
  };

  return (
    <button
      className="circular ui big button"
      id={id}
      onClick={() => {
        handleGameTimeOne(time);
      }}
    >
      {disp}
    </button>
  );
};

export default TimerOptions;
