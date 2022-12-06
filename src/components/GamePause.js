import React, { useState } from 'react';
import '../styles/MainMenu.css';

const GamePause = ({
    unPause,
    score,
    userAnswer,
    correctAnswer,
    randomize,
    getVideo,
    handleUpdateScore,
    handleCorrectChoice
    }) => {

    //Displays score screen
    const[toScore, setToScore] = useState(false);

    const scoreButton = () => {
        setToScore(true);
        handleUpdateScore();
        randomize();
    }

    const continueButton = () => {
        setToScore(false);
        handleCorrectChoice();
        unPause();
        getVideo();
    }

    let displayAnswer = correctAnswer.replace(/[0-9]/g, '');

    return(
        <div className="gamePause">
            <div>Your answer is : {userAnswer} and the correct Answer is :  {displayAnswer}</div>
        
            {!toScore &&
            <button 
                className="ui semantic inverted large green button"
                id="scoreButt"
                onClick={() => {scoreButton()}}
                >See current score</button>
            }

            {toScore &&
                <div>
                    Your score is : {score}
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