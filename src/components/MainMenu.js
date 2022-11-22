import React, { useState } from 'react';
import Ready from './Ready';
import '../styles/MainMenu.css';
import TimerOptions from './TimerOptions';
import Timer from './Timer&AnsButtons';
import GameOver from './GameOver';
import GameScreen from './GameScreen';
import GamePause from './GamePause';

const MainMenu = () => {

    const[timeChosen, setTimeChosen] = useState(false);
    const[gameBegin, setGameBegin] = useState(false);
    const[gameOver, setGameOver] = useState(false);
    const[gameTime, setGameTime] = useState();
    const[gamePause, setGamePause] = useState(false);

    const handleTimeChosen = () => {
        //Triggers are you ready screen
        setTimeChosen(!timeChosen)   
    }

    const handleGameBegin = () => {
        //Triggers timer and game to begin
        setGameBegin(!gameBegin)   
    }

    const handleGameTime = (newTime) => {
        //Sends the chosen time to the countdown timer
        setGameTime(newTime);
    }

    const handleGameOver = () => {
        //Triggers game over screen when time reaches 0
        setGameOver(!gameOver);
    }

    const handleGamePause = () => {
        setGamePause(!gamePause);
    }

    const handleResetGame = () => {
        //Goes back to main menu and reverts all state
        //To start again
        setTimeChosen(false);
        setGameBegin(false);
        setGameOver(false);
        setGameTime();
    }

    return(
        <div className="mainMenu">

            { !gameBegin &&
            <TimerOptions 
            handleTimeChosen={handleTimeChosen}
            handleGameTime={handleGameTime}
            />
            }

            { timeChosen && 
            <Ready 
            handleTimeChosen={handleTimeChosen}
            handleGameBegin={handleGameBegin}
            />}

            { gameBegin &&
            <Timer 
            gameBegin={gameBegin}
            gameTime={gameTime}
            handleGamePause={handleGamePause}
            handleGameOver={handleGameOver}
            />
            }

            { gameOver &&
            <GameOver 
            handleResetGame={handleResetGame}
            />
            }

            <GameScreen />

            {/* { gamePause &&
            <GamePause 
            handleGamePause={handleGamePause}
            />
            } */}

        </div>
    )
}

export default MainMenu;