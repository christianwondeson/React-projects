import classes from "../layout/Homepage.module.css";
import ShapeUp  from "./shapes/ShapeUp";
import ShapeDown from "./shapes/ShapeDown";
import ScrollBar from "./shapes/scrollBar";

function Homepage() {
  return (
    <div className={classes.hero}>
      <div className={classes.hero_content}>
        <h1>will manner chef and professional companion.</h1>
        <h2>see more about me</h2>
        <ShapeUp />
        <ShapeDown />
        <ScrollBar />
      </div>
    </div>
  );
}
export default Homepage;
