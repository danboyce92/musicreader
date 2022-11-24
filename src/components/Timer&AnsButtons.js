import React, { useState, useEffect } from 'react';
import { useInterval } from './useInterval';
import GamePause from './GamePause';
import '../styles/MainMenu.css';
import '../styles/AnswerButtons.css';
const Timer = (props) => {

    const[isPaused, setIsPaused] = useState(false);
    const[userAnswer, setUserAnswer] = useState('');
    let [seconds, setSeconds] =useState(120);


    useInterval(() => {
        countdownTimer();
      }, props.isRunning ? 1000 : null);
    

    const countdownTimer = () => {
        setSeconds( seconds - 1);
    
        const countDownEl = document.getElementById("countdown");
        
        let minutes = Math.floor(seconds/60);
        let realSec = seconds % 60;
    
        realSec = realSec < 10 ? '0' + realSec : realSec;
    
        countDownEl.innerHTML = `${minutes}:${realSec}`;
    
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
        setUserAnswer('C')

    }

    const cSAnswerButton = () => {
        pause();
        setUserAnswer('C#')
        
    }

    const dAnswerButton = () => {
        pause();
        setUserAnswer('D')
    }

    const dSAnswerButton = () => {
        pause();
        setUserAnswer('D#')
    }

    const eAnswerButton = () => {
        pause();
        setUserAnswer('E')
    }

    const fAnswerButton = () => {
        pause();
        setUserAnswer('F')
    }

    const fSAnswerButton = () => {
        pause();
        setUserAnswer('F#')
    }

    const gAnswerButton = () => {
        pause();
        setUserAnswer('G')
    }

    const gSAnswerButton = () => {
        pause();
        setUserAnswer('G#')
    }

    const aAnswerButton = () => {
        pause();
        setUserAnswer('A')
    }

    const aSAnswerButton = () => {
        pause();
        setUserAnswer('A#')
    }

    const bAnswerButton = () => {
        pause();
        setUserAnswer('B')
    }

    return(
        <div>
            <h3 
            className="timer"
            id="countdown"
            >0:00</h3>

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

            { isPaused &&
            <GamePause
            unPause={unPause}
            />
            }

        </div>
    )
}

export default Timer;