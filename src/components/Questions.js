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


      

const Questions = () => {



    return(
        <div>
            <div>

                <video id="myvid" autoPlay>
                    <source type="video/mp4"></source>
                </video>

            </div>
        </div>
    )
}

export default Questions;


