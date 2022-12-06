import React from 'react';
import '../styles/MainMenu.css';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from '../firebase/firebase';

const GameOver = ({
    handleResetGame,
    score
    }) => {

    const db = getFirestore(app);

    const handleReturnMainMenu = () => {
        //This reverts all state 
        // setDoc(doc(db, username, "Scores"), {
        //     score: score
        // });

        handleResetGame();

    }

    return(
        <div className="gameOver">
            <div> Game Over</div>
            <br />
            <div>Well done, your score is : {score} </div>

            <button
            className="ui semantic blue button"
            id="returnButton"
            onClick={handleReturnMainMenu}
            >Return to main menu</button>
        </div>
    )
}

export default GameOver;