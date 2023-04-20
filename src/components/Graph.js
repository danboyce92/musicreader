import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
} from 'firebase/firestore';
import { getDatabase, ref } from 'firebase/database';
import { app } from '../firebase/firebase';
import LineChart from './LineChart';

const Graph = ({ username }) => {
  const db = getFirestore(app);
  const database = getDatabase(app);
  const databaseRef = ref(database);

  const { graphToggle } = useSelector((state) => {
    return {
      graphToggle: state.gameState.graphToggle,
    };
  });

  //Attempt at retrieving scores
  const q = query(collection(db, username), where('score', '>=', 0));

  let querySnapshot;
  let result;
  let graphArray = [];
  let scoresArray;
  let labelArray = [];

  const queryFunction = async () => {
    querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      graphArray.push(doc.data());
    });
    result = graphArray.map((a) => a.score);
    scoresArray = result.slice(-10);

    let labelLength = result.length;

    for (let i = labelLength; i > 0; i--) {
      labelArray.push(i);
    }
  };

  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Last game scores',
        data: [],
      },
    ],
  });

  const handleSetData = async () => {
    await queryFunction();
    setUserData({
      labels: labelArray,
      datasets: [
        {
          label: 'Last game scores',
          data: scoresArray,
          backgroundColor: ['red'],
          borderColor: 'rgba(255,255,255,1)',
        },
      ],
    });
  };

  return (
    <div className="graph">
      {graphToggle && <LineChart data={userData} />}

      <button
        onClick={() => {
          handleSetData();
        }}
        className="ui semantic inverted green big button"
        id="generateButton"
      >
        Generate latest scores
      </button>
    </div>
  );
};

export default Graph;
