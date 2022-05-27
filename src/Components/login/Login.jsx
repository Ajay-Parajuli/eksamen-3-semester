import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  function signIn(event) {
    event.preventDefault();
    const mail = event.target.mail.value;
    const password = event.target.password.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        let code = error.code;
        code = code.replaceAll("-", " ");
        code = code.replaceAll("auth/", "");
        setErrorMessage(code);
      });
  }

  return (
    <div className="box">
      <div className="insidebox">
        <div className="indhold">
          <h1>Login</h1>
          <form onSubmit={signIn} className="form">
            <p>Email</p>
            <input className="input" type="email" name="mail" placeholder="Type your mail" /> <br></br>
            <p>Password</p>
            <input className="input" type="password" name="password" placeholder="Type your password" />
            <br></br>
            <p className="text-error">{errorMessage}</p>
            <button className="buttons">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};
