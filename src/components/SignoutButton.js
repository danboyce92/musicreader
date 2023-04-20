import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const LogoutButton = () => {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="signOut">
      <button
        className="ui semantic big inverted white button bottomButton"
        onClick={logout}
      >
        Signout
      </button>
    </div>
  );
};

export default LogoutButton;
