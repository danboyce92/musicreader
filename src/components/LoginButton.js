import React from 'react';
import { useAuth } from '../firebase/auth';

const LoginButton = () => {
    const { authUser, isLoading } = useAuth();


    return (
        <div className="LoginButton">
            <button className="ui huge inverted purple button">Login

            </button>
        </div>
    )
}

export default LoginButton;