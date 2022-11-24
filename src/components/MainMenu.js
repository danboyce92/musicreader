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
    const[userAnswer, setUserAnswer] = useState('');
    const[correctAnswer, setCorrectAnswer] = useState('');

    const [isRunning, setIsRunning] = useState(false);


    console.log(correctAnswer);

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

    const handleIsRunningTrue = () => {
        setIsRunning(true);
    }

    const handleIsRunningFalse = () => {
        setIsRunning(false);
    }

    const handleUserAnswer = (answer) => {
        setUserAnswer(answer)
    }

    const handleCorrectAnswer = (answer) => {
        setCorrectAnswer(answer)
    }


    const handleGameOver = () => {
        //Triggers game over screen when time reaches 0
        setGameOver(!gameOver);
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
            handleIsRunningTrue={handleIsRunningTrue}
            />}

            { gameBegin &&
            <Timer 
            gameBegin={gameBegin}
            gameTime={gameTime}
            isRunning={isRunning}
            handleIsRunningTrue={handleIsRunningTrue}
            handleIsRunningFalse={handleIsRunningFalse}
            handleGameOver={handleGameOver}
            handleUserAnswer={handleUserAnswer}
            />
            }


            <GameScreen 
            isRunning={isRunning}
            handleCorrectAnswer={handleCorrectAnswer}
            />


            { gameOver &&
            <GameOver 
            handleResetGame={handleResetGame}
            />
            }


        </div>
    )
}

export default MainMenu;