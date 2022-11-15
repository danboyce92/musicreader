import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/firebase';
import Landing from './components/Landing';
import SignoutButton from './components/SignoutButton';
import MainMenu from './components/MainMenu';
import './styles/App.css';

function App() {

  const[user, setUser] = useState();


  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        
    })
}, [user])

  return (
    <div className="app">

      <div className="title">♩♩ Reader</div>

      <div className="container">



        { !user  
        ? <Landing /> 
        : <SignoutButton />
        }

        {user &&
        <MainMenu />
        }



      </div>

      <h4 className="loggedIn" >User: {user? user.email : "Not logged in"} </h4>
      

    </div>
  );
}

export default App;
