import React, { useEffect } from 'react';
import '../styles/MainMenu.css';
const Timer = (props) => {

    //Using useState for paused caused some issues
    //So vanilla functions were used instead
    let paused = false;

    function pause() {
        paused = true;
    }

    function unPause() {
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

    return(
        <div>
            <h3 
            className="timer"
            id="countdown"
            >0:00</h3>

            <button 
            className="ui semantic huge green button"
            onClick={() => {countdownBegin()}}
            >Start</button>

            <button
            className="ui semantic huge orange button"
            onClick={() => {pause()}}
            >Pause</button>

            <button
            className="ui semantic huge yellow button"
            onClick={() => {unPause()}}
            >Unpause</button>

        </div>
    )
}

export default Timer;