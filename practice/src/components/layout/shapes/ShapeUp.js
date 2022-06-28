import classes from '../Homepage.module.css';

function ShapeUp()
{
return(
    <div className={classes.shapes}>
    <div className={classes.square}id={classes.square_1}></div>
    <div className={classes.square} ></div>
    <div className={classes.square} id={classes.square_2}></div>
  </div>
);
}
export default ShapeUp;