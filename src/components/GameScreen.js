import React from 'react';
import '../styles/GameScreen.css';
import Questions from './Questions';


const GameScreen = (props) => {


    return(
        <div className="gameScreen">
            <div className="imageInsert">

            </div>

            <Questions 
            handleCorrectAnswer={props.handleCorrectAnswer}
            />


        </div>
    )
}

export default GameScreen;