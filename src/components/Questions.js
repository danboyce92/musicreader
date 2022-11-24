import React from 'react';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { app } from '../firebase/firebase';
import { questionsArr, randomize } from './Randomize';
import '../styles/GameScreen.css';



const storage = getStorage(app);
   
export function getVideo() {
    
    getDownloadURL(ref(storage, `/${randomize()}.mp4`))
        .then((url) => {

            const vid = document.getElementById('myvid');
            vid.setAttribute('src', url);
        })
        .catch((error) => {
            
        });
}


      

const Questions = (props) => {

    const questionsArr = 
    ['Ab1', 'Ab2', 'Ab3', 'A1', 'A2', 'A3', 'A#1', 'A#2', 'A#3', 
    'Bb1', 'Bb2', 'Bb3', 'B1', 'B2', 'B3', 
    'C1', 'C2', 'C3', 'C#1', 'C#2', 'C#3', 
    'Db1', 'Db2', 'D1', 'D2', 'D#1', 'D#2',
    'Eb1', 'Eb2', 'E1', 'E2',
    'F1', 'F2', 'F#1', 'F#2',
    'Gb1', 'Gb2', 'G1', 'G2', 'G#1', 'G#2'
    ]
    
    function randomize() {
        let random = Math.floor(Math.random() * 41)
        let result = questionsArr[random];
        let correctAnswer = result.replace(/[0-9]/g, '');
        props.handleCorrectAnswer(correctAnswer);
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


