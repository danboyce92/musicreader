import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleGameBegin,
  toggleGameOver,
  setGameTime,
  setScore,
} from '../store';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import { app } from '../firebase/firebase';

const GameOver = ({ username }) => {
  const db = getFirestore(app);
  const database = getDatabase(app);
  const databaseRef = ref(database);
  const dispatch = useDispatch();
  const { score } = useSelector((state) => {
    return {
      score: state.gameScore.score,
    };
  });

  const handleResetGame = () => {
    //Goes back to main menu and reverts all state
    //To start again

    dispatch(toggleGameBegin(false));
    dispatch(toggleGameOver(false));
    dispatch(setGameTime(0));
    dispatch(setScore(0));
  };

  //Increments Game Score Id
  function writeNewId(Id) {
    set(ref(database, 'Id'), {
      Id: Id,
    });
  }
  //variable used to identify the collection in database
  let currentId;
  //Id saves snapshot image of firestore collection to currentId
  const Id = async () => {
    await get(child(databaseRef, 'Id'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          currentId = snapshot.val();
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReturnMainMenu = async () => {
    //Saves an image of database
    await Id();
    //Records new score to firestore
    setDoc(doc(db, username, `Record${currentId.Id}`), {
      score: score,
    });
    //This reverts all state
    handleResetGame();
    //To increment score Id for next game
    writeNewId(currentId.Id + 1);
  };

  return (
    <div className="gameOver">
      <div className="game"> Game Over</div>
      <br />
      <div className="over">Well done, your score is : {score} </div>

      <button
        className="ui semantic inverted white huge button"
        id="returnButton"
        onClick={handleReturnMainMenu}
      >
        Return to main menu
      </button>
    </div>
  );
};

export default GameOver;
