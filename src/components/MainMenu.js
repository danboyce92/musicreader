import React, { useEffect, useState } from 'react';
import Ready from './Ready';
import '../styles/MainMenu.css';

const MainMenu = () => {
    const[gameTime, setGameTime] = useState('');
    const[timeChosen, setTimeChosen] = useState(false)


    const handleGameTimeOne = async () => {
        setGameTime(1)
        setTimeChosen(true)
    }

    const handleGameTimeTwo = async () => {
        setGameTime(2)
        setTimeChosen(true)
    }

    const handleGameTimeFive = async () => {
        setGameTime(5)
        setTimeChosen(true)
    }

    const handleTimeChosen = () => {
        setTimeChosen(!timeChosen)
        
    }

    useEffect(() => {
        console.log(gameTime)
    }, [gameTime])


    return(
        <div className="mainMenu">
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


            {timeChosen && 
            <Ready 
            handleTimeChosen={handleTimeChosen}
            />}
        </div>
    )
}

export default MainMenu;