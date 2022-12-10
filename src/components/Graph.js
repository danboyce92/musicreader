import React, { useState } from 'react';
import { getFirestore, doc, setDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import { app } from '../firebase/firebase';
import LineChart from './LineChart';


const Graph = ({ username }) => {

    const db = getFirestore(app);
    const database = getDatabase(app);
    const databaseRef = ref(database);

    //Attempt at retrieving scores
    const q = query(collection(db, username), where("score", ">=", 0));

    let querySnapshot;
    let result;
    let graphArray = [];

    const queryFunction = async () => {
        querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            graphArray.push(doc.data());
        });
            result = graphArray.map(a => a.score);
        
    }

    let scoresArray;
    let labelArray;

    const arrayShortener = () => {
        if(result && result.length > 10){
            let newResult = result.slice(-10);
            scoresArray = newResult;
        } else {
            scoresArray = result;
        }
    }

    

    queryFunction();
    
    const labelGenerator = async () => {
        await arrayShortener();
        let labelLength = scoresArray.length
        
        for(let i = labelLength; i > 0; i--){
            labelArray.push(i)
        }
        
    }

    labelGenerator();


    //     const [userData, setUserData] = useState({
    //     labels: ,
    //     datasets: []
    // });
    

    return(
        <div>

        <LineChart 
        scores={arrayShortener()}
        labels=""
        />

            <button
            onClick={() => {console.log(labelGenerator())}}
            >Graph button</button>
        </div>
    )
}

export default Graph;