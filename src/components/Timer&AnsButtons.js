import React, { useState, useEffect } from 'react';
import GamePause from './GamePause';
import '../styles/MainMenu.css';
import '../styles/AnswerButtons.css';
const Timer = (props) => {



    let paused = false;

    //Using useState for paused caused some issues
    //So vanilla functions were used instead


    const pause = () => {
        paused = true;
        //This breaks the timer
        // props.handleGamePause();
    }


    const handleUnPaused = () => {
        paused = false;
    }

    //If use Effect gives trouble, try
    //wrapping countdownBegin in an if statement
    //depending on the state gameBegin
    useEffect(() => {
        countdownBegin();
    }, [])

    const countdownBegin = () => {
        //This is the logic for the countdown timer
        const startingMinutes = props.gameTime;
        let time = startingMinutes * 60;

        const countDownEl = document.getElementById("countdown");

        let interval = setInterval(updateCountdown, 1000);

        function updateCountdown() {
            
            if(!paused){
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds;

            countDownEl.innerHTML = `${minutes}:${seconds}`;
            time--;
            
            if(time < 0) {                
                clearInterval(interval)
                props.handleGameOver();
            }
            }     
        }
    }


    //Indvidual answer buttons functions

    const cAnswerButton = () => {
        pause();

    }

    const cSAnswerButton = () => {
        pause();
        
    }

    const dAnswerButton = () => {
        pause();
        
    }

    const dSAnswerButton = () => {
        pause();
        
    }

    const eAnswerButton = () => {
        pause();
        
    }

    const fAnswerButton = () => {
        pause();
        
    }

    const fSAnswerButton = () => {
        pause();
        
    }

    const gAnswerButton = () => {
        pause();
        
    }

    const gSAnswerButton = () => {
        pause();
        
    }

    const aAnswerButton = () => {
        pause();
        
    }

    const aSAnswerButton = () => {
        pause();
        
    }

    const bAnswerButton = () => {
        pause();
        
    }

    return(
        <div>
            <h3 
            className="timer"
            id="countdown"
            >0:00</h3>

            {/* <button 
            className="ui semantic huge green button"
            id="timerButton"
            onClick={() => {countdownBegin()}}
            >Start</button> */}

            <button
            className="ui semantic huge orange button"
            id="timerButton"
            // onClick={() => {pause()}}
            >Pause</button>

            <button
            className="ui semantic huge yellow button"
            id="timerButton"
            // onClick={() => {unPause()}}
            >Unpause</button>




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

            { paused &&
            <GamePause 
            handleUnPaused={handleUnPaused}
            />
            }

        </div>
    )
}

export default Timer;