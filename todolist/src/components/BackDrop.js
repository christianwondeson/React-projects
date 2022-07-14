import classes from "./Todo.module.css";

function BackDrop(props) {
  return <div className={classes.Backdrop} onClick={props.onTerminate}></div>;
}
export default BackDrop;
