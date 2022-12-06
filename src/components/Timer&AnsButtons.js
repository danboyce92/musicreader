import React, { useState } from 'react';
import { useInterval } from './useInterval';
import GamePause from './GamePause';
import '../styles/MainMenu.css';
import '../styles/AnswerButtons.css';
const Timer = (props) => {

    const[isPaused, setIsPaused] = useState(false);
    let [seconds, setSeconds] =useState(props.gameTime);


    //Timing and scoring logic
    const interval = useInterval(() => {
        countdownTimer();
      }, props.isRunning ? 1000 : null);


    

    const countdownTimer = () => {
        setSeconds( seconds - 1);
    
        const countDownEl = document.getElementById("countdown");
        
        let minutes = Math.floor(seconds/60);
        let realSec = seconds % 60;
    
        realSec = realSec < 10 ? '0' + realSec : realSec;
    
        countDownEl.innerHTML = `${minutes}:${realSec}`;
    
        if(seconds <= -1){
            clearInterval(interval);
            props.handleIsRunningFalse();
            props.handleGameBegin();
            props.handleGameOver();
          }

      }


      const pause = () => {
        setIsPaused(true);
        props.handleIsRunningFalse();
      }

      const unPause = () => {
        setIsPaused(false);
        props.handleIsRunningTrue();
      }


    //Indvidual answer buttons functions

    const cAnswerButton = () => {
        pause();
        props.handleUserAnswer('C')


    }

    const cSAnswerButton = () => {
        pause();
        props.handleUserAnswer('C#')

        
    }

    const dAnswerButton = () => {
        pause();
        props.handleUserAnswer('D')

    }

    const dSAnswerButton = () => {
        pause();
        props.handleUserAnswer('D#')

    }

    const eAnswerButton = () => {
        pause();
        props.handleUserAnswer('E')

    }

    const fAnswerButton = () => {
        pause();
        props.handleUserAnswer('F')

    }

    const fSAnswerButton = () => {
        pause();
        props.handleUserAnswer('F#')

    }

    const gAnswerButton = () => {
        pause();
        props.handleUserAnswer('G')

    }

    const gSAnswerButton = () => {
        pause();
        props.handleUserAnswer('G#')

    }

    const aAnswerButton = () => {
        pause();
        props.handleUserAnswer('A')

    }

    const aSAnswerButton = () => {
        pause();
        props.handleUserAnswer('A#')
    }

    const bAnswerButton = () => {
        pause();
        props.handleUserAnswer('B')

    }

    return(
        <div>
            <h3 
            className="timer"
            id="countdown"
            ></h3>

            {!isPaused &&
            <div className="answerButtons">
                <button 
                id="ansButC"
                className="circular ui big button"
                onClick={() => {cAnswerButton()}}
                >C</button>

                <button
                id="ansButCS"
                className="circular ui big button"   
                onClick={() => {cSAnswerButton()}}           
                >C#/Db</button>

                <button
                id="ansButD"   
                className="circular ui big button"  
                onClick={() => {dAnswerButton()}}           
                >D</button>

                <button
                id="ansButDS"   
                className="circular ui big button"  
                onClick={() => {dSAnswerButton()}}           
                >D#/Eb</button>

                <button
                id="ansButE"   
                className="circular ui big button"   
                onClick={() => {eAnswerButton()}}          
                >E</button>

                <button
                id="ansButF" 
                className="circular ui big button"  
                onClick={() => {fAnswerButton()}}             
                >F</button>

                <button
                id="ansButFS"   
                className="circular ui big button"     
                onClick={() => {fSAnswerButton()}}        
                >F#/Gb</button>

                <button
                id="ansButG"  
                className="circular ui big button"   
                onClick={() => {gAnswerButton()}}           
                >G</button>

                <button
                id="ansButGS"  
                className="circular ui big button"   
                onClick={() => {gSAnswerButton()}}           
                >G#/Ab</button>

                <button
                id="ansButA"   
                className="circular ui big button"   
                onClick={() => {aAnswerButton()}}          
                >A</button>

                <button
                id="ansButAS"  
                className="circular ui big button"  
                onClick={() => {aSAnswerButton()}}            
                >A#/Bb</button>

                <button
                id="ansButB"  
                className="circular ui big button"   
                onClick={() => {bAnswerButton()}}           
                >B</button>

            </div>
            }

            { isPaused &&
            <GamePause
            unPause={unPause}
            score={props.score}
            userAnswer={props.userAnswer}
            correctAnswer={props.correctAnswer}
            randomize={props.randomize}
            getVideo={props.getVideo}
            handleAnswerCheck={props.handleAnswerCheck}
            handleUpdateScore={props.handleUpdateScore}
            handleCorrectChoice={props.handleCorrectChoice}
            />
            }

        </div>
    )
}

export default Timer;