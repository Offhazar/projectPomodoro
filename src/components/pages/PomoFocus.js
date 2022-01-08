import { NavLink, Switch } from 'react-router-dom';
import classes from '../main/Main.module.css';
const PomoFocus = () => {
  return (
    <>
      <NavLink className={classes.btnFoces} to="/pomo" exact>
        PomoBreak
      </NavLink>
      <NavLink className={classes.btnShort} to="/short">
        ShortBreak
      </NavLink>
      <NavLink className={classes.btnLong} to="/long">
        LongBreak
      </NavLink>
    </>
  );
};

export default PomoFocus;
