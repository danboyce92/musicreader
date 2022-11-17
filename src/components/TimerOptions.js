import React, { useState } from 'react';


const TimerOptions = (props) => {

    const handleGameTimeOne = async () => {
        props.handleTimeChosen();
        props.handleGameTime(1);
    }

    const handleGameTimeTwo = async () => {
        props.handleTimeChosen();
        props.handleGameTime(2);
    }

    const handleGameTimeFive = async () => {
        props.handleTimeChosen();
        props.handleGameTime(5);
    }

    return(
        <div>
            <div className="playFor">Play for - </div>

            <button 
            className="circular ui big button" 
            id="oneMin"
            onClick={handleGameTimeOne}
            >
                1 minute
            </button>

            <button 
            className="circular ui big button" 
            id="twoMin"
            onClick={handleGameTimeTwo}
            >
                2 minutes
            </button>

            <button 
            className="circular ui big button" 
            id="fiveMin"
            onClick={handleGameTimeFive}
            >
                5 minutes
            </button>

        </div>
    )
}

export default TimerOptions;