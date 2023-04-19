import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { app } from '../firebase/firebase';
import {
  toggleTimeChosen,
  toggleGameBegin,
  toggleIsRunning,
  setScorePoints,
  setCorrectAnswer,
} from '../store';
// import '../styles/MainMenu.css';

const Ready = () => {
  const dispatch = useDispatch();

  const { random } = useSelector((state) => {
    return {
      random: state.userAnswer.random,
    };
  });

  const handleTimeNo = () => {
    dispatch(toggleTimeChosen());
  };

  const handleTimeYes = () => {
    dispatch(toggleTimeChosen());
    dispatch(toggleGameBegin(true));
    //Triggers countdown timer
    dispatch(toggleIsRunning(true));
    //To reset scorepoints
    dispatch(setScorePoints(500));
    getVideo();
  };

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

  return (
    <div>
      <div className="ready">
        <div className="sentence"> Are you ready to start?</div>

        <button
          className="ui semantic red button"
          id="noButton"
          onClick={handleTimeNo}
        >
          No, choose different time
        </button>
        <button
          className="ui semantic green button"
          id="yesButton"
          onClick={handleTimeYes}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default Ready;
