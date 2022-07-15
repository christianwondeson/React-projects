import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, Db } from "../firebase";
import homestyle from "./Home.module.css";
import { useNavigate } from "react-router";
import classes from "../components/welcome.module.css";
import { uid } from "uid";
import { set, ref, onValue } from "firebase/database";

export default function Home() {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        onValue(ref(Db, `/${auth.currentUser.uid}`), (snapshot) => {
          setTodos([]);
          const data = snapshot.val();

          if (data !== null) {
            Object.values(data).map((todo) => {
              setTodos((oldArray) => [...oldArray, todo]);
            });
          }
        });
      } else if (!user) {
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((err) => {
        alert(err.message);
      });
  };

  const writeToDatabase = () => {
    const uidd = uid();
    set(ref(Db, `/${auth.currentUser.uid}/${uidd}`), {
      todo: todo,
      uidd: uidd,
    });

    setTodo("");
  };

  return (
    <div>
      <div className={classes.maincontent}>
        <form>
          <div className={classes.userbox}>
            <input
              type="text"
              placeholder=" Add Todo ..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <button className={homestyle.btn} onClick={handleSignOut}>
            sign out
          </button>
          {todos.map((todo) => (
           <div>
             <h2 htmlFor="">{todo.todo}</h2>
             <button className={homestyle.btn} onClick={writeToDatabase}>
          update
        </button>
        <button className={homestyle.btn} onClick={writeToDatabase}>
          delete
        </button>
           </div>
          ))}
        </form>
        <button className={homestyle.btn} onClick={writeToDatabase}>
          add
        </button>
      </div>
    </div>
  );
}
