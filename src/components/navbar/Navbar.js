import classes from './Navbar.module.css';
import group from '../../assets/Group.png';
import group2 from '../../assets/Group2.png';
import React from 'react';
import ModalPomo from '../../UI/ModalPomo';
import ModalOverlay from '../modalOverlay/ModalOverlay';

const Navbar = (props) => {
  const [isShow, setIsShow] = React.useState(false);
  // const pomoTime = useSelector((state) => state.settings.saveMoreTime);

  // const [progress, setProgress] = useState(0);
  // const procent = (progress / (pomoTime * 60)) * 100;

  function modalIsSHowHandler() {
    setIsShow((prev) => (prev = !prev));
  }

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>Pomofocus</h1>
        <div className={classes.headerBtn}>
          <button className={classes.btn1} onClick={modalIsSHowHandler}>
            <img alt="settings" src={group} />
            Settings
          </button>
          <button className={classes.btn1}>
            <img alt="grav" src={group2} />
            Report
          </button>
        </div>
      </div>
      <main>{props.children}</main>
      <div className={classes.container}>
        <div className={classes.progress} style={{ width: '200px' }} />
      </div>

      {isShow && (
        <ModalPomo onCloseModal={setIsShow}>
          <ModalOverlay onCloseModal={setIsShow} />
        </ModalPomo>
      )}
    </>
  );
};

export default Navbar;
