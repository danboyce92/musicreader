import React, { useState } from 'react';
import Ready from './Ready';
import '../styles/MainMenu.css';
import TimerOptions from './TimerOptions';
import Timer from './Timer';
import GameOver from './GameOver';

const MainMenu = () => {

    const[timeChosen, setTimeChosen] = useState(false);
    const[gameBegin, setGameBegin] = useState(false);
    const[gameOver, setGameOver] = useState(false);
    const[gameTime, setGameTime] = useState();

    const handleTimeChosen = () => {
        setTimeChosen(!timeChosen)   
    }

    const handleGameBegin = () => {
        setGameBegin(!gameBegin)   
    }

    const handleGameTime = (newTime) => {
        setGameTime(newTime);
    }

    const handleGameOver = () => {
        setGameOver(!gameOver);
    }

    return(
        <div className="mainMenu">

            {!gameBegin &&
            <TimerOptions 
            handleTimeChosen={handleTimeChosen}
            handleGameTime={handleGameTime}
            />
            }

            {timeChosen && 
            <Ready 
            handleTimeChosen={handleTimeChosen}
            handleGameBegin={handleGameBegin}
            />}

            {gameBegin &&
            <Timer 
            gameBegin={gameBegin}
            gameTime={gameTime}
            handleGameOver={handleGameOver}
            />
            }

            { gameOver &&
            <GameOver />
}

        {/* <button 
        className="ui semantic large green button"
        onClick={() => {console.log(gameTime)}}
        >Here</button> */}


        </div>
    )
}

export default MainMenu;