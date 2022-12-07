import React, { useState } from 'react';
import '../styles/MainMenu.css';

const GamePause = ({
    unPause,
    score,
    scorePoints,
    userAnswer,
    correctAnswer,
    randomize,
    getVideo,
    handleUpdateScore,
    handleCorrectChoice,
    correctChoice
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

    const roundPoints = () => {
        if(scorePoints < 100) {
            return 100
        } else {
            return scorePoints
        }
    }

    return(
        <div className="gamePause">
            <div className="choice">You chose : {userAnswer} </div>
            {correctChoice &&
                <div className="correct">You are correct! you have gained {roundPoints()} points!</div>
            }

            {!correctChoice &&
                <div className="incorrect">You are incorrect.</div>
            }
        
            {!toScore &&
            <button 
                className="ui semantic inverted large green button"
                id="scoreButt"
                onClick={() => {scoreButton()}}
                >See current score</button>
            }

            {toScore &&
                <div className='currentScore'>
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