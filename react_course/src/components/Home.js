import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import homestyle from "./Home.module.css";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(navigate("/"))
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <h2>Home is working by http routing</h2>
      <button className={homestyle.btn} onClick={handleSignOut}>
        sign out
      </button>
    </div>
  );
}
