import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';

const Landing = (props) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const loginButton = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const registerButton = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <div className="ui form">
              <div className="field">
                <label>Email</label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => {
                      setLoginEmail(e.target.value);
                    }}
                  />
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input
                    type="password"
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                  <i className="lock icon"></i>
                </div>
              </div>
              <button className="ui blue submit button" onClick={loginButton}>
                Login
              </button>
            </div>
          </div>
          <div className="middle aligned column">
            <div className="ui form">
              <div className="field">
                <label>Email</label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                  />
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input
                    type="password"
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                  />
                  <i className="lock icon"></i>
                </div>
              </div>
              <button
                className="ui blue submit button"
                onClick={registerButton}
              >
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="ui vertical divider">Or</div>
      </div>
    </div>
  );
};

export default Landing;
