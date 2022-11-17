import React from 'react';
import '../styles/MainMenu.css';


const GameOver = () => {


    const handleReturnMainMenu = () => {
        //Put in logic to revert the relevant states
        //& bring back to main menu
    }

    return(
        <div className="gameOver">
            <div> Game Over</div>
            <br />
            <div>Well done, your score is : </div>

            <button
            className="ui semantic blue button"
            id="returnButton"
            >Return to main menu</button>
        </div>
    )
}

export default GameOver;