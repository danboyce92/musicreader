import React from 'react';
import '../styles/MainMenu.css';


const GameOver = (props) => {


    const handleReturnMainMenu = () => {
        //This reverts all state 
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