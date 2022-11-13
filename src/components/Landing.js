import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import '../styles/Landing.css';

const Landing = (props) => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);

    })

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

    }

    const registerButton = async () => {
        try {
        const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
            );
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    };



    return (
        <div>

            <div className="signInBox">

            <div className="loginBox">
                <h3>Login here</h3>
                <input 
                type='text'
                value={loginEmail}
                placeholder='Email...' 
                onChange={(event) => setLoginEmail(event.target.value)}
                />
                <br></br>
                <br></br>
                <input 
                placeholder='Password...'
                value='' 
                onChange={(e) => setLoginPassword(e.target.value)}
                />

                <br></br>
                <br></br>
                <button 
                id="loginButton"
                onClick={loginButton}
                >Login</button>
            </div>


            <div className="registerBox">
                <h3>Register here</h3>
                <input 
                value="text"
                placeholder='Email...' 
                onChange={(e) => setRegisterEmail(e.target.value)}
                />
                
                <br></br>
                <br></br>
                <input 
                value="text"
                placeholder='Password...' 
                onChange={(e) => setRegisterPassword(e.target.value)}
                />

                <br></br>
                <br></br>
                <button
                onClick={registerButton}
                >Create User</button>
            </div>

            </div>
    
        </div>
    )
}

export default Landing;

