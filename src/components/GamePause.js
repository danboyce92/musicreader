import React from 'react';
import '../styles/MainMenu.css';

const GamePause = (props) => {

    const continueButton = () => {
        props.unPause();

    }

    return(
        <div className="gamePause">
            <div>Your answer is : Correct/Incorrect</div>
        
            <button 
            className="ui semantic inverted large green button"
            id="contButt"
            onClick={() => {continueButton()}}
            >Continue</button>
        </div>
    )
}

export default GamePause;