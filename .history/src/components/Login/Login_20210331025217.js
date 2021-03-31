import firebase from "firebase/app";
import "firebase/auth";
import React from 'react';
import firebaseConfig from './firebase.config';

const Login = () => {

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    return (
        <div>

        </div>
    );
};

export default Login;