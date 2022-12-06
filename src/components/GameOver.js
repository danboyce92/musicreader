import React from 'react';
import '../styles/MainMenu.css';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from '../firebase/firebase';

const GameOver = (props) => {

    const db = getFirestore(app);

    // const username = props.user.email.slice(0, props.user.email.indexOf("@"));

    // console.log(username)

    const handleReturnMainMenu = () => {
        //This reverts all state 
        // setDoc(doc(db, username, "Scores"), {
        //     score: props.score
        // });

        props.handleResetGame();

    }

    return(
        <div className="gameOver">
            <div> Game Over</div>
            <br />
            <div>Well done, your score is : </div>

            <button
            className="ui semantic blue button"
            id="returnButton"
            onClick={handleReturnMainMenu}
            >Return to main menu</button>
        </div>
    )
}

export default GameOver;