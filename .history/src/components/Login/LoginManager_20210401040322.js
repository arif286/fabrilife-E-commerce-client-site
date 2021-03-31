import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFirebase = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleGoogleSingIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, email, photoURL, phoneNumber } = res.user;
      const singedUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        password: "",
        success: true,
        photo: photoURL,
        phone: phoneNumber,
      };
      return singedUser;
    })
    .catch((err) => {
      return err.message;
    });
};

export const createUserWithEmailAndPassword = (email, password, fullName) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      updateUserName(fullName);
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};
export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};

const updateUserName = (fullName) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: fullName,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
