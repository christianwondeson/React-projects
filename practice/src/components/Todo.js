import classes from "./Todo.module.css";

function Navbar() {
  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <img src="./" alt="" srcset="" />
      </div>
      <nav className={classes.navbar}>
        <ul className={classes.unorder}>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">experience</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
