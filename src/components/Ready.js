import React from 'react';
import '../styles/MainMenu.css';


const Ready = (props) => {

    const handleTime = () => {
        props.handleTimeChosen()
    }

    return(
        <div>
            <div className="ready">
                Are you ready to start?

                <button 
                className="ui semantic red button"
                id="noButton"
                onClick={handleTime}
                >No, choose different time</button>

                <button
                className="ui semantic green button"
                id="yesButton"
                
                >Yes</button>

            </div>
        </div>
    )
}

export default Ready;