import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTimeChosen, setGameTime, setRandom } from '../store';
import { questionsArr } from './NoteArrays';

const TimerOptions = () => {
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
    <div className="timebuttons">
      <button
        className="circular ui big button"
        id="oneMin"
        onClick={() => {
          handleGameTimeOne(60);
        }}
      >
        1 minute
      </button>

      <button
        className="circular ui big button"
        id="twoMin"
        onClick={() => {
          handleGameTimeOne(120);
        }}
      >
        2 minutes
      </button>

      <button
        className="circular ui big button"
        id="fiveMin"
        onClick={() => {
          handleGameTimeOne(300);
        }}
      >
        5 minutes
      </button>
    </div>
  );
};

export default TimerOptions;
