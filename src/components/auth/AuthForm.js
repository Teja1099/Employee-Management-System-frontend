import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router";
import classes from "./AuthForm.module.css";
import axios from "axios";
import AuthContext from "../context/auth-context";

const AuthForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const userName = useRef();
  const password = useRef();

  const switchToSignUp = () => {
    history.push("/sign-up");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const values = {
      userName: userName.current.value,
      password: password.current.value,
    };
    console.log(userName.current.value);

    axios({
      method: "POST",
      url: "http://localhost:8080/api/v1/auth/login",
      data: values,
    })
      .then((response) => {
        // console.log("response", response);
        try {
          if (response.status == "200") {
            const expTime = new Date(
              new Date().getTime() + response.data.expTime
            );

            authCtx.login(response.data.token, expTime.toISOString());

            authCtx.admin(response.data.role);
            history.push("/employees");
          } else {
            alert("Something Wrong!Please Try Again");
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        if (err && err.response) {
          switch (err.response.status) {
            case 401:
              console.log("401 status");
              alert("Authentication Failed.Bad Credentials");
              break;
            default:
              alert("Something Wrong!Please Try Again");
          }
        } else {
          alert("Some logic Wrong!Please Try Again");
        }
      });
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={userName} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={password} required />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchToSignUp}
          >
            Create new account
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
