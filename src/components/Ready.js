import React from 'react';
import '../styles/MainMenu.css';


const Ready = ({
    handleTimeChosen,
    handleGameBegin,
    handleIsRunningTrue,
    getVideo
    }) => {

    const handleTimeNo = () => {
        handleTimeChosen()
    }

    const handleTimeYes = () => {
        handleTimeChosen()
        handleGameBegin()
        handleIsRunningTrue()
        getVideo();
    }

    return(
        <div>
            <div className="ready">
                Are you ready to start?

                <button 
                className="ui semantic red button"
                id="noButton"
                onClick={handleTimeNo}
                >No, choose different time</button>

                <button
                className="ui semantic green button"
                id="yesButton"
                onClick={handleTimeYes}
                >Yes</button>

            </div>
        </div>
    )
}

export default Ready;