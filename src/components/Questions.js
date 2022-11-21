import React from 'react';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { app } from '../firebase/firebase';
import '../styles/GameScreen.css';

let pic;
const storage = getStorage(app);
getDownloadURL(ref(storage, 'A2.png'))
    .then((url) => {

        const img = document.getElementById('myimg');
        img.setAttribute('src', url);
    })
    .catch((error) => {
        
    });

    console.log(pic);


const Questions = () => {



    return(
        <div>
            <div>

                <img id="myimg" alt="pic"></img>
            </div>
        </div>
    )
}

export default Questions;


