import "./Todo.module.css";
import classes from "./Todo.module.css";

function Model(props) {
  return (
    <div className={classes.model}>
      <p>Are You Sure?</p>
      <button className={classes.btnalt} onClick={props.onCancel}>
        Cancel
      </button>
      <button className={classes.btn} onClick={props.onConfirm}>Confirm</button>
    </div>
  );
}

export default Model;
