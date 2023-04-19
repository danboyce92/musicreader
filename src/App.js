import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import { useAuth } from './firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { toggleGraph } from './store';
import Landing from './components/Landing';
import MainMenu from './components/MainMenu';
import Loading from './components/Loading';
import Timer from './components/Timer';
import TimerOptions from './components/TimerOptions';
import SignoutButton from './components/SignoutButton';
import Logo from './logo.png';

// import './styles/App.css';
import './sass/main.scss';

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const { authUser, isLoading } = useAuth();

  const { gameBegin, gameOver, graphToggle, score } = useSelector((state) => {
    return {
      gameBegin: state.gameState.gameBegin,
      gameOver: state.gameState.gameOver,
      graphToggle: state.gameState.graphToggle,
      score: state.gameScore.score,
    };
  });

  let username;

  if (user) {
    username = user.email.slice(0, user.email.indexOf('@'));
  }

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (!isLoading && !authUser) {
        <Navigate to="/login" replace={true} />;
      }
    });
  }, [user, authUser, isLoading]);

  return (
    <div className="app">
      <div>
        {!user && !loading && <Landing />}

        {user && loading && <Loading />}

        {user && !loading && (
          <div className="container">
            <MainMenu user={user} username={username} />
            <img className="title" src={Logo} alt="logo"></img>
            {!gameBegin && !gameOver && !graphToggle && <TimerOptions />}
            {user && !gameBegin && <SignoutButton />}
            {user && !gameBegin && !gameOver && (
              <button
                className="ui semantic big inverted white button bottomButton"
                id="graphButton"
                onClick={() => {
                  dispatch(toggleGraph());
                }}
              >
                Player Stats
              </button>
            )}
            {gameBegin && (
              <h3 className="currentScore">Your current score is : {score}</h3>
            )}
            <h3 className="loggedIn">
              User: {user ? user.email : 'Not logged in'}{' '}
            </h3>
            {gameBegin && <Timer />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
