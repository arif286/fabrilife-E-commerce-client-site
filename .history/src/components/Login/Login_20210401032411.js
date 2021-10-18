import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import Google from "../../assets/logos/Group 573.png";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  handleGoogleSingIn,
  initializeLoginFirebase,
  signInWithEmailAndPassword
} from "./LoginManager";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState(true);

  initializeLoginFirebase();
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const onSubmit = (data) => {
    if (data.firstName) {
      const { firstName, lastName, email, password } = data;
      const fullName = `${firstName} ${lastName}`;

      createUserWithEmailAndPassword(email, password, fullName)
        .then((res) => {
          handleResponse(res, true);
        })
        .catch((error) => {
          handleResponse(error, false);
        });
    } else {
      const { email, password } = data;
      signInWithEmailAndPassword(email, password)
        .then((res) => {
          handleResponse(res, true);
        })
        .catch((error) => {
          handleResponse(error, false);
        });
    }
  };

  const handleGoogleLogin = () => {
    handleGoogleSingIn()
      .then((res) => {
        setLoggedInUser(res);
        history.replace(from);
      })
      .catch((error) => {
        setLoggedInUser(error);
      });
  };

  const handleResponse = (res, redirect) => {
    const { email, displayName, photoURL, phoneNumber, success, error } = res;
    const newUserInfo = {
      email: email,
      name: displayName,
      photo: photoURL,
      phone: phoneNumber,
      success: success,
      error: error,
    };
    setLoggedInUser(newUserInfo);
    if (redirect) {
      history.replace(from);
    }
  };
  return (
    <div className="login-page">
      {user ? (
        <div>
          <h1 className="form-header"> Create An Account</h1>
          <form className="form-submit" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              placeholder="Your first name"
              ref={register({
                validate: (value) => value.length > 3,
                required: true,
              })}
            />
            {errors.firstName && (
              <p>Your first name is less than 3 characters</p>
            )}
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              placeholder="Your last name"
              ref={register({
                validate: (value) => value.length > 2,
                required: true,
              })}
            />
            {errors.lastName && <p>Your last name is less than 2 characters</p>}
            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="Your Email"
              type="email"
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <p>Your email is invalid</p>}
            <label>Password</label>
            <input
              name="password"
              placeholder="Your Password"
              type="password"
              ref={register({
                required: "You must specify a password",
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
              })}
            />
            {errors.password && (
              <p>
                password between 6 to 20 characters which contain one numeric
                digit one uppercase and one lowercase letter
              </p>
            )}
            <label>Repeat password</label>
            <input
              name="password_repeat"
              type="password"
              placeholder="confirm password"
              ref={register({
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
            <input type="submit" />
            {loggedInUser.error && <p>{loggedInUser.error}</p>}
          </form>
          <p style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <small className="toggle-signIn" onClick={() => setUser(!user)}>
              Login.
            </small>
          </p>
        </div>
      ) : (
        <div>
          <form className="form-submit" onSubmit={handleSubmit(onSubmit)}>
            <h1>Log In</h1>
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              ref={register({
                required: "You must fill",
              })}
            />

            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Your password"
              ref={register}
            />
            <input type="submit" value="Login" />
            {!loggedInUser.success && <p>{loggedInUser.error}</p>}
          </form>
          <p style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <small className="toggle-signIn" onClick={() => setUser(!user)}>
              Create an account
            </small>
          </p>
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <p>Or Using Other</p>
        <button onClick={() => handleGoogleLogin()} className="login-btn">
          <img src={Google} alt="" />{" "}
          <p className="login-title">Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
