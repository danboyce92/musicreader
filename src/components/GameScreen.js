import React from 'react';
import '../styles/GameScreen.css';
import Questions from './Questions';
import AnswerButtons from './AnswerButtons';

const GameScreen = () => {

    return(
        <div className="gameScreen">
            <div className="imageInsert">

            </div>

            <Questions />
            <AnswerButtons />

        </div>
    )
}

export default GameScreen;