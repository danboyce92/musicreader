import React from 'react';

import { questionsArr, randomize } from './Randomize';
import '../styles/GameScreen.css';





      

const Questions = () => {


    
    function randomize() {
        let random = Math.floor(Math.random() * 41)
        let result = questionsArr[random];
        let correctAnswer = result.replace(/[0-9]/g, '');

        return result;
    }
    

    return(
        <div>
            <div className="questions">

                <video id="myvid" autoPlay>
                    <source type="video/mp4"></source>
                </video>

            </div>
        </div>
    )
}

export default Questions;


