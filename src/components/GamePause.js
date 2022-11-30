import React, { useState } from 'react';
import { getVideo } from './Questions';
import '../styles/MainMenu.css';

const GamePause = (props) => {
    //Displays score screen
    const[toScore, setToScore] = useState(false);

    const scoreButton = () => {
        setToScore(true);
        props.handleUpdateScore();
        props.randomize();
    }

    const continueButton = () => {
        setToScore(false);
        props.handleCorrectChoice();
        props.unPause();
        props.getVideo();
    }

    let displayAnswer = props.correctAnswer.replace(/[0-9]/g, '');

    return(
        <div className="gamePause">
            <div>Your answer is : {props.userAnswer} and the correct Answer is :  {displayAnswer}</div>
        
            {!toScore &&
            <button 
                className="ui semantic inverted large green button"
                id="scoreButt"
                onClick={() => {scoreButton()}}
                >See current score</button>
            }

            {toScore &&
                <div>
                    Your score is : {props.score}
                </div>
            }

            {toScore &&
            <button 
                className="ui semantic inverted large green button"
                id="contButt"
                onClick={() => {continueButton()}}
                >Continue</button>
            }

        </div>
    )
}

export default GamePause;