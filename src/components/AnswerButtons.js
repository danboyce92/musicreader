import React from 'react';
import '../styles/AnswerButtons.css';

const AnswerButtons = () => {

    return(
        <div>
            <div className="answerButtons">
                <button 
                id="ansButC"
                className="circular ui big button"
                >C</button>

                <button
                id="ansButCS"
                className="circular ui big button"              
                >C#/Db</button>

                <button
                id="ansButD"   
                className="circular ui big button"             
                >D</button>

                <button
                id="ansButDS"   
                className="circular ui big button"             
                >D#/Eb</button>

                <button
                id="ansButE"   
                className="circular ui big button"             
                >E</button>

                <button
                id="ansButF" 
                className="circular ui big button"               
                >F</button>

                <button
                id="ansButFS"   
                className="circular ui big button"             
                >F#/Gb</button>

                <button
                id="ansButG"  
                className="circular ui big button"              
                >G</button>

                <button
                id="ansButGS"  
                className="circular ui big button"              
                >G#/Ab</button>

                <button
                id="ansButA"   
                className="circular ui big button"             
                >A</button>

                <button
                id="ansButAS"  
                className="circular ui big button"              
                >A#/Bb</button>

                <button
                id="ansButB"  
                className="circular ui big button"              
                >B</button>

            </div>
        </div>
    )
}

export default AnswerButtons;