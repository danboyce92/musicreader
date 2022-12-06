import React, { useState, useEffect } from 'react';
import Ready from './Ready';
import { useInterval } from './useInterval';
import '../styles/MainMenu.css';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { app, writeScore } from '../firebase/firebase';
import TimerOptions from './TimerOptions';
import Timer from './Timer&AnsButtons';
import GameOver from './GameOver';
import GameScreen from './GameScreen';
import GamePause from './GamePause';

const MainMenu = ({ user }) => {
    //To render or unrender ready screen
    const[timeChosen, setTimeChosen] = useState(false);
    //Removes timer options when game begins
    const[gameBegin, setGameBegin] = useState(false);
    //Triggers game over screen
    const[gameOver, setGameOver] = useState(false);
    //Moves chosen time into the countdown timer
    const[gameTime, setGameTime] = useState();
    //Contains userAnswer
    const[userAnswer, setUserAnswer] = useState('0');
    //Contains actual answer
    const[correctAnswer, setCorrectAnswer] = useState('');
    //Random note for video link and correct answer state
    const[random, setRandom] = useState('');
    // Determines if userAnswer and correctAnswer are the same
    const [correctChoice, setCorrectChoice] = useState(false);
    //Keeps track of score
    const[score, setScore] = useState(0);
    // State that pauses and unpauses countdown timer
    const [isRunning, setIsRunning] = useState(false);
    //Current questions score
    const [scorePoints, setScorePoints] = useState(500);


    const scoreInterval =  useInterval(() => {
        scoreLogic();
    }, isRunning ? 10 : null)

    const scoreLogic = () => {
        if(isRunning){
        setScorePoints(scorePoints -1);
        } 
    }

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
        //Triggers countdown timer
        setIsRunning(true);
        //To reset scorepoints
        setScorePoints(500);
    }

    const handleIsRunningFalse = () => {
        //Pauses countdown timer
        setIsRunning(false);
        //To reset scorepoints
        // setReset(false);


    }

    const handleUserAnswer = (answer) => {
        //Extracts user's answer
        setUserAnswer(answer)
    }

    const handleAnswerCheck = () => {
        let correct = correctAnswer.replace(/[0-9]/g, '');
        if(userAnswer === correct){
            setCorrectChoice(true)
        }
    }

    const handleUpdateScore = () => {
        if(correctChoice){
            if(scorePoints > 0){
            setScore(score + scorePoints);
            } else {
                setScore(score + 100)
            }
        }
    }

    const handleCorrectChoice = () => {
        setCorrectChoice(false);
    }

    const handleGameOver = () => {
        //Triggers game over screen when time reaches 0
        setGameOver(true);
    }


    const handleResetGame = () => {
        //Goes back to main menu and reverts all state
        //To start again
        // writeScore(user.email, score)
        setTimeChosen(false);
        setGameBegin(false);
        setGameOver(false);
        setGameTime();
        setScore(0);
    }




    const storage = getStorage(app);
   
    function getVideo() {
        
        getDownloadURL(ref(storage, `/${random}.mp4`))
            .then((url) => {
    
                const vid = document.getElementById('myvid');
                vid.setAttribute('src', url);
                const link = vid.getAttribute('src');
                setCorrectAnswer(random);

            })
            .catch((error) => {
                
            });
    }

    const questionsArr = 
    ['G#3', 'G#4', 'G#5', 'A1', 'A2', 'A3', 'A#1', 'A#2', 'A#3', 
    'A#4', 'A#5', 'A#6', 'B1', 'B2', 'B3', 
    'C1', 'C2', 'C3', 'C#1', 'C#2', 'C#3', 
    'C#4', 'C#5', 'D1', 'D2', 'D#1', 'D#2',
    'D#3', 'D#4', 'E1', 'E2',
    'F1', 'F2', 'F#1', 'F#2',
    'F#3', 'F#4', 'G1', 'G2', 'G#1', 'G#2'
    ]

    function randomize() {
        let randomNumber = Math.floor(Math.random() * 41)
        let result = questionsArr[randomNumber];
        let correctAnswer = result.replace(/[0-9]/g, '');
        setRandom(result);
        
    }


    useEffect(() => {
        handleAnswerCheck();
    }, [userAnswer]);



    return(
        <div className="mainMenu">

            { !gameBegin &&
            <TimerOptions 
            handleTimeChosen={handleTimeChosen}
            handleGameTime={handleGameTime}
            randomize={randomize}
            />
            }

            { timeChosen && 
            <Ready 
            handleTimeChosen={handleTimeChosen}
            handleGameBegin={handleGameBegin}
            handleIsRunningTrue={handleIsRunningTrue}
            randomize={randomize}
            getVideo={getVideo}
            />}

            { gameBegin &&
            <Timer 
            gameTime={gameTime}
            isRunning={isRunning}
            userAnswer={userAnswer}
            correctAnswer={correctAnswer}
            score={score}
            handleIsRunningTrue={handleIsRunningTrue}
            handleIsRunningFalse={handleIsRunningFalse}
            handleGameOver={handleGameOver}
            handleUserAnswer={handleUserAnswer}
            randomize={randomize}
            getVideo={getVideo}
            handleAnswerCheck={handleAnswerCheck}
            handleUpdateScore={handleUpdateScore}
            handleCorrectChoice={handleCorrectChoice}
            handleGameBegin={handleGameBegin}
            />
            }


            <GameScreen 

            />


            { gameOver &&
            <GameOver 
            // user={user}
            score={score}
            handleResetGame={handleResetGame}
            />
            }

            <button 
            className="ui semantic green huge button"
            onClick={() => {console.log(random)}}
            >HERE</button>

            {gameBegin &&
            <div className="currentScore">
                Your current score is : {score}
            </div>
            }

            <button
            onClick={() => {console.log(scorePoints)}}
            >
                Thisone
            </button>

        </div>
    )
}

export default MainMenu;