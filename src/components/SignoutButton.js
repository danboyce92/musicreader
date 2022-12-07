import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';
import '../styles/App.css';

const LogoutButton = () => {

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <div>
            <button 
            className="ui semantic big inverted white button" 
            id="signOut"
            onClick={logout}
            >Signout</button> 
        
        </div>
    )

}

export default LogoutButton;