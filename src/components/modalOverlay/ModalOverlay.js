import classes from './ModalOverlay.module.css';
import close from '../../assets/close.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimes } from '../../store/Settings';

const ModalOverlay = (props) => {
  const [pomodoroTime, setPomodoroTime] = useState(0);
  const [shortBreak, setShortBreak] = useState(0);
  const [longBreak, setLongBreak] = useState(0);

  const dispatch = useDispatch();

  const pomodoroTimeChangeHandler = (e) => {
    setPomodoroTime(e.target.value);
  };
  const shortbreakTimeChangeHandler = (e) => {
    setShortBreak(e.target.value);
  };
  const longBreakTimeChangeHandler = (e) => {
    setLongBreak(e.target.value);
  };

  const formChangeHandler = (e) => {
    e.preventDefault();

    let data = {
      pomTime: +pomodoroTime,
      shortTime: +shortBreak,
      longTime: +longBreak,
    };

    dispatch(setTimes(data));
    props.onCloseModal(false);
  };
  const pomo = useSelector((state) => state.settings.times.pomTime);
  const short = useSelector((state) => state.settings.times.shortTime);
  const long = useSelector((state) => state.settings.times.longTime);
  return (
    <div className={classes.container}>
      {/* nav */}
      <div className={classes.navModal}>
        <div className={classes.navModal1}>
          <h2>TIMER SETTIG</h2>
        </div>
        <div className={classes.closes}>
          <img src={close} onClick={() => props.onCloseModal(false)} />
        </div>
      </div>
      {console.log()}
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
          <input
            type="number"
            defaultValue={pomo}
            onChange={pomodoroTimeChangeHandler}
          />
          <input
            type="number"
            defaultValue={short}
            onChange={shortbreakTimeChangeHandler}
          />
          <input
            type="number"
            defaultValue={long}
            onChange={longBreakTimeChangeHandler}
          />
        </div>
      </div>
      {/* header */}
      <div className={classes.headerModal}>
        <h4>Auto start Breaks?</h4>
        <input type="checkbox" defaultValue={true} />
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
        <button onClick={formChangeHandler}>OK</button>
      </div>
    </div>
  );
};

export default ModalOverlay;
