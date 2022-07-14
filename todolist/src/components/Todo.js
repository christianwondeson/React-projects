import { useState } from "react";

import BackDrop from "./BackDrop";
import Model from "./Model";
import classes from "./Todo.module.css";
import "../index.css";

function Todo(props) {
  const [modelIsOpen, setModelIsOpen] = useState(false);

  function handleDelete() {
    setModelIsOpen(true);
  }
  function BackgroundHandler() {
    setModelIsOpen(false);
  }
  function handleCancel() {
    setModelIsOpen(false);
  }
  return (
    <div className={classes.card}>
      <h1 className={classes.header}>My Todos</h1>
      <div className={classes.container}>
        <h2>{props.title}</h2>
        <div className={classes.actions}>
          <button className={classes.btn} onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
      {modelIsOpen && <Model onCancel={handleCancel} />}
      {modelIsOpen && <BackDrop onTerminate={BackgroundHandler} />}
    </div>
  );
}

export default Todo;
