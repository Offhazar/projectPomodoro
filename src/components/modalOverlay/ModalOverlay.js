import classes from './ModalOverlay.module.css';
import close from '../../assets/close.png';
import { useHistory } from 'react-router-dom';

const ModalOverlay = () => {
  const history = useHistory();
  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div className={classes.container}>
      {/* nav */}
      <div className={classes.navModal}>
        <div className={classes.navModal1}>
          <h2>TIMER SETTIG</h2>
        </div>
        <div className={classes.closes}>
          <img src={close} />
        </div>
      </div>
      {/* main */}
      <div className={classes.mainModal}>
        <div>
          <h5>Time (minutes)</h5>
        </div>
      </div>
      <div className={classes.mainModalInput}>
        <h6>Pomodoro</h6>
        <h6>Short Break</h6>
        <h6>Long Break</h6>
      </div>
      <div>
        <div className={classes.mainModalInput}>
          <input type="number" />
          <input type="number" />
          <input type="number" />
        </div>
      </div>
      {/* header */}
      <div className={classes.headerModal}>
        <h4>Auto start Breaks?</h4>
        <input type="checkbox" />
      </div>
      {/* header2 */}
      <div className={classes.headerModal2}>
        <h4>Auto start Pomodoros?</h4>
        <input type="checkbox" />
      </div>
      {/* header3 */}
      <div className={classes.headerModal3}>
        <h4>Long Break interval</h4>
        <input type="number" />
      </div>
      {/* footer */}
      <div className={classes.footer}>
        <button onClick={back}>OK</button>
      </div>
    </div>
  );
};

export default ModalOverlay;
