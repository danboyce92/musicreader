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