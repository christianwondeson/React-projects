import classes from "../Homepage.module.css";

function ScrollBar()
{
    return(
            <div className={classes.scrolls}>
                <div className={classes.ellipse}>
                </div>
                <div className={classes.circle}></div>
            </div>
    );
}

export default ScrollBar;