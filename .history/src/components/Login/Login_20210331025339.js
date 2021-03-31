import firebase from "firebase/app";
import "firebase/auth";
import React from 'react';
import firebaseConfig from './firebase.config';

const Login = () => {

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogle = () => {

    }
    return (
        <div>
            <button onClick={handleGoogle}>google</button>
        </div>
    );
};

export default Login;