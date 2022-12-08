import React, { useState } from 'react';
import '../styles/MainMenu.css';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import { app } from '../firebase/firebase';

const GameOver = ({
    handleResetGame,
    score,
    username
    }) => {

    let recordId = 1;

    const db = getFirestore(app);
    const database = getDatabase(app);
    const databaseRef = ref(database);

    function writeNewId(Id) {
        set(ref(database, 'Id'), {
            Id: Id
        })
    }

    let currentId;

    const Id = async () => {
        await get(child(databaseRef, 'Id')).then((snapshot) => {
            if(snapshot.exists()) {
                 currentId = snapshot.val();
            } else {
                console.log("No data available")
            }
        }).catch((error) => {
            console.error(error);
        })
    }


    const handleReturnMainMenu = async () => {
        //This reverts all state 

        //Need to find a way to increment the currentId.Id value
        await Id();
        setDoc(doc(db, username, `Record${currentId.Id}`), {
            score: score
        });

        handleResetGame();
        writeNewId(currentId.Id++);

    }

    return(
        <div className="gameOver">
            <div className="game"> Game Over</div>
            <br />
            <div className='over'>Well done, your score is : {score} </div>

            <button
            className="ui semantic inverted white huge button"
            id="returnButton"
            onClick={handleReturnMainMenu}
            >Return to main menu</button>
        </div>
    )
}

export default GameOver;