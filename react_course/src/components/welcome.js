import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged,createUserWithEmailAndPassword, confirmPasswordReset } from "firebase/auth";
import { auth } from "../firebase";
import classes from "./welcome.module.css";
import { useNavigate } from "react-router";

import welcome from "./welcome.png";

export default function Welcome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsRegistering, SetIsRegistering] = useState(false);

  const [registerInformation, setRegisterInformation] = useState({
    email:'',
    ConfirmEmail:'',
    password:'',
    ConfirmPassword:''
  });

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/Home");
      }
    });
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/Home");
      })
      .catch((err) => alert(err.message));
  };

  const handleAccount = () => {
    SetIsRegistering(true);
  };

  const goBack = () => SetIsRegistering(false);

  const handleRegister = () => {

    if(registerInformation.email != registerInformation.ConfirmEmail)
    {
      alert('Please confirm entered Email\'s are the same!');
      return
    }else if(registerInformation.password != registerInformation.ConfirmPassword)
    {
      alert('Please Confirm entered Password\'s are the same');
      return
    }
    createUserWithEmailAndPassword(auth, registerInformation.email, registerInformation.password).then(() =>{
      navigate('/Home');
    }).catch((err) => alert(err.message));
  };

  return (
    <div className={classes.maincontent}>
      <h1>todo list</h1>
      <div>
        {IsRegistering ? (
          <>
            <form method="SUBMIT">
              <div className={classes.userbox}>
                <input type="email" placeholder="Email" value={registerInformation.email} onChange={(e) => setRegisterInformation({...registerInformation, email: e.target.value})}/>
                <label htmlFor="email">email</label>
              </div>
              <div className={classes.userbox}>
                <input type="Confirm email" placeholder="Confirm email" value={registerInformation.ConfirmEmail}
                onChange={(e) => setRegisterInformation({...registerInformation, ConfirmEmail: e.target.value})}/>
                <label htmlFor="emails">Confirm email</label>
              </div>
              <div className={classes.userbox}>
                <input type="password" placeholder="password" value={registerInformation.password}
                onChange={(e) => setRegisterInformation({...registerInformation, password: e.target.value})}/>
                <label htmlFor="pass">password</label>
              </div>
              <div className={classes.userbox}>
                <input type="password" placeholder="Confirm password" value={registerInformation.ConfirmPassword}
                onChange={(e) => setRegisterInformation({...registerInformation, ConfirmPassword: e.target.value})}/>
                <label htmlFor="pass">confirm password</label>
              </div>
              <a onClick={handleRegister}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                register
              </a>
              <a href="" onClick={goBack}>
                go back
              </a>
            </form>
          </>
        ) : (
          <>
            <form method="POST">
              <div className={classes.userbox}>
                <input
                  type="email"
                  onChange={handleEmailChange}
                  placeholder='Email'
                  value={email}
                />
                <label htmlFor="email">email</label>
              </div>
              <div className={classes.userbox}>
                <input
                  type="password"
                  onChange={handlePassChange}
                  placeholder='password'
                  value={password}
                />
                <label htmlFor="pass">password</label>
              </div>
              <a onClick={handleSignIn}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                sign in
              </a>
              <button onClick={handleAccount}>create an account</button>
            </form>
            <div className="welcome">
              <img src={welcome} alt="" className={classes.image} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
