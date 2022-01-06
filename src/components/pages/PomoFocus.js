import { NavLink } from 'react-router-dom';
import classes from '../main/Main.module.css';
const PomoFocus = () => {
  return (
    <>
      <NavLink className={classes.btnFoces} to="/pomo">
        Pomofocus
      </NavLink>
      <NavLink className={classes.btnShort} to="/short">
        Short Break
      </NavLink>
      <NavLink className={classes.btnLong} to="/long">
        Long Break
      </NavLink>
    </>
  );
};

export default PomoFocus;
