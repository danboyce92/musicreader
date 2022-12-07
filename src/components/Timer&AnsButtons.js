import React, { useState } from 'react';
import { useInterval } from './useInterval';
import GamePause from './GamePause';
import '../styles/MainMenu.css';
import '../styles/AnswerButtons.css';

const Timer = ({ 
    gameTime,
    isRunning,
    userAnswer,
    correctAnswer,
    score,
    scorePoints,
    handleIsRunningTrue,
    handleIsRunningFalse,
    handleGameOver,
    handleUserAnswer,
    randomize,
    getVideo,
    handleAnswerCheck,
    handleUpdateScore,
    handleCorrectChoice,
    correctChoice,
    handleGameBegin

    }) => {

    const [isPaused, setIsPaused] = useState(false);
    const [seconds, setSeconds] = useState(gameTime);


    //Timing and scoring logic
    const interval = useInterval(() => {
        countdownTimer();
      }, isRunning ? 1000 : null);


    const countdownTimer = () => {
        setSeconds( seconds - 1);
    
        const countDownEl = document.getElementById("countdown");
        
        let minutes = Math.floor(seconds/60);
        let realSec = seconds % 60;
    
        realSec = realSec < 10 ? '0' + realSec : realSec;
    
        countDownEl.innerHTML = `${minutes}:${realSec}`;
    
        if(seconds <= -1){
            clearInterval(interval);
            handleIsRunningFalse();
            handleGameBegin();
            handleGameOver();
          }
      }


      const pause = () => {
        setIsPaused(true);
        handleIsRunningFalse();
      }

      const unPause = () => {
        setIsPaused(false);
        handleIsRunningTrue();
      }


    return(
        <div>
            <div 
            className="timer"
            id="countdown"
            ></div>

            {!isPaused &&
            <div className="answerButtons">
                <button 
                id="ansButC"
                className="circular ui big button"
                onClick={
                    () => {pause();
                    handleUserAnswer('C')}
                }
                >C</button>

                <button
                id="ansButCS"
                className="circular ui big button"   
                onClick={
                    () => {pause();
                    handleUserAnswer('C#')}
                }        
                >C#/Db</button>

                <button
                id="ansButD"   
                className="circular ui big button"  
                onClick={
                    () => {pause();
                    handleUserAnswer('D')}
                }         
                >D</button>

                <button
                id="ansButDS"   
                className="circular ui big button"  
                onClick={
                    () => {pause();
                    handleUserAnswer('D#')}
                }        
                >D#/Eb</button>

                <button
                id="ansButE"   
                className="circular ui big button"   
                onClick={
                    () => {pause();
                    handleUserAnswer('E')}
                }       
                >E</button>

                <button
                id="ansButF" 
                className="circular ui big button"  
                onClick={
                    () => {pause();
                    handleUserAnswer('F')}
                }          
                >F</button>

                <button
                id="ansButFS"   
                className="circular ui big button"     
                onClick={
                    () => {pause();
                    handleUserAnswer('F#')}
                }       
                >F#/Gb</button>

                <button
                id="ansButG"  
                className="circular ui big button"   
                onClick={
                    () => {pause();
                    handleUserAnswer('G')}
                }         
                >G</button>

                <button
                id="ansButGS"  
                className="circular ui big button"   
                onClick={
                    () => {pause();
                    handleUserAnswer('G#')}
                }          
                >G#/Ab</button>

                <button
                id="ansButA"   
                className="circular ui big button"   
                onClick={
                    () => {pause();
                    handleUserAnswer('A')}
                }        
                >A</button>

                <button
                id="ansButAS"  
                className="circular ui big button"  
                onClick={
                    () => {pause();
                    handleUserAnswer('A#')}
                }          
                >A#/Bb</button>

                <button
                id="ansButB"  
                className="circular ui big button"   
                onClick={
                    () => {pause();
                    handleUserAnswer('B')}
                }         
                >B</button>

            </div>
            }

            { isPaused &&
            <GamePause
            unPause={unPause}
            score={score}
            scorePoints={scorePoints}
            userAnswer={userAnswer}
            correctAnswer={correctAnswer}
            correctChoice={correctChoice}
            randomize={randomize}
            getVideo={getVideo}
            handleUpdateScore={handleUpdateScore}
            handleCorrectChoice={handleCorrectChoice}
            />
            }

        </div>
    )
}

export default Timer;