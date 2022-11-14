import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from './firebase/firebase';
import Landing from './components/Landing';
import './styles/App.css';

function App() {

  const[userName, setUserName] = useState();


  const logout = async () => {
    await signOut(auth);
}

  return (
    <div className="app">

      <div className="title">♩♩ Reader</div>

      <div className="container">

        <button 
        className="ui semantic big inverted purple button" 
        id="signOut"
        onClick={logout}
        >Signout</button>
        

        <Landing 
        changeUserName={(userName) => setUserName(userName)}
        />

      </div>

      <h4 className="loggedIn" >User: {userName? userName.email : "Not logged in"} </h4>
      

    </div>
  );
}

export default App;
