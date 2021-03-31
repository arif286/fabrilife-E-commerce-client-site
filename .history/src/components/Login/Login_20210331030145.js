import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { UserContext } from "../../App";
import firebaseConfig from './firebase.config';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(googleProvider)
          .then((res) => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
              isSignedIn: true,
              name: displayName,
              email: email,
              photo: photoURL,
              success: true,
            };
            setLoggedInUser(signedInUser);
          })
          .catch((err) => {
            console.log(err);
            console.log(err.message);
          });
    }
    return (
        <div>
            <button onClick={handleGoogle}>google</button>
        </div>
    );
};

export default Login;