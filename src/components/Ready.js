import React from 'react';
import '../styles/MainMenu.css';


const Ready = (props) => {

    const handleTimeNo = () => {
        props.handleTimeChosen()
    }

    const handleTimeYes = () => {
        props.handleTimeChosen()
        props.handleGameBegin()
        props.handleIsRunningTrue()
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