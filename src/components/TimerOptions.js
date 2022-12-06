import React from 'react';


const TimerOptions = ({
    handleTimeChosen,
    handleGameTime,
    randomize
    }) => {

    const handleGameTimeOne = async (time) => {
        handleTimeChosen();
        handleGameTime(time);
        randomize();
    }


    return(
        <div>
            <div className="playFor">Play for - </div>

            <button 
            className="circular ui big button" 
            id="oneMin"
            onClick={() => {handleGameTimeOne(60)}}
            >
            1 minute
            </button>

            <button 
            className="circular ui big button" 
            id="twoMin"
            onClick={() => {handleGameTimeOne(120)}}
            >
            2 minutes
            </button>

            <button 
            className="circular ui big button" 
            id="fiveMin"
            onClick={() => {handleGameTimeOne(300)}}
            >
            5 minutes
            </button>

        </div>
    )
}

export default TimerOptions;