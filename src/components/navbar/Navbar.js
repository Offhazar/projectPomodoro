import classes from './Navbar.module.css';
import group from '../../assets/Group.png';
import group2 from '../../assets/Group2.png';
import group3 from '../../assets/Group3.png';
import { useDispatch } from 'react-redux';
import { showAction } from '../../store/Switch';

const Navbar = (props) => {
  const dispatch = useDispatch();
  const modalIsSHowHandler = () => {
    dispatch(showAction.toggle());
  };
  return (
    <>
      <div className={classes.headerContainer}>
        <h1>Pomofocus</h1>
        <div className={classes.headerBtn}>
          <button className={classes.btn1} onClick={modalIsSHowHandler}>
            <img src={group} />
            Settings
          </button>
          <button className={classes.btn1}>
            <img src={group2} />
            Report
          </button>
        </div>
      </div>
      <main>{props.children}</main>
      <div className={classes.headerLine}>
        <img src={group3} />
      </div>
    </>
  );
};

export default Navbar;
