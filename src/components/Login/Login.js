import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebaseConfig from './firebase.config';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

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
              history.replace(from)
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