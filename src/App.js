import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/firebase';
import { useAuth } from './firebase/auth';
import Landing from './components/Landing';
import SignoutButton from './components/SignoutButton';
import MainMenu from './components/MainMenu';
import Loading from './components/Loading';
import './styles/App.css';


function App() {

  const [ user, setUser ] = useState();
  const [ loading, setLoading ] = useState(false);
  const { authUser, isLoading } = useAuth();

  let username;

  if(user){
    username = user.email.slice(0, user.email.indexOf("@"));
  }


  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    setLoading(false);
    if (!isLoading && !authUser) {
      <Navigate to="/login" replace={true} />
    }

    })
}, [user, authUser, isLoading])

  return ( 

    <div className="app">

      <div className="container">

        { !user && !loading &&
         <Landing /> 
        }
        
        {user && loading &&
          <Loading />
        }

        {user && !loading &&
          <MainMenu 
          user={user}
          username={username}
          />
        }
      
      </div>
    </div>




  );
}

export default App;
