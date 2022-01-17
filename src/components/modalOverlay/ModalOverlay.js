import classes from './ModalOverlay.module.css';
import close from '../../assets/close.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAutoBreaks,
  setTimes,
  setPomodoros,
  setInterval,
} from '../../store/Settings';
import Button from '../../UI/Button';
import Input from '../../UI/Input';

const ModalOverlay = (props) => {
  const dispatch = useDispatch();

  const [pomodoroTime, setPomodoroTime] = useState('');
  const [shortBreak, setShortBreak] = useState('');
  const [longBreak, setLongBreak] = useState('');

  const [intevalInput, setIntevalInput] = useState('');
  const interval = useSelector((state) => state.settings.interval);

  const pomo = useSelector((state) => state.settings.times.pomTime);
  const short = useSelector((state) => state.settings.times.shortTime);
  const long = useSelector((state) => state.settings.times.longTime);

  const autoStartPomo = useSelector((state) => state.settings.autoPomodoros);
  const autoStartBreaks = useSelector((state) => state.settings.autoBreaks);

  const pomodoroTimeChangeHandler = (e) => {
    setPomodoroTime(e.target.value);
  };
  const shortbreakTimeChangeHandler = (e) => {
    setShortBreak(e.target.value);
  };
  const longBreakTimeChangeHandler = (e) => {
    setLongBreak(e.target.value);
  };

  useEffect(() => setIntevalInput(interval), [interval]);

  const formChangeHandler = (e) => {
    e.preventDefault();
    console.log('herro');
    let data = {
      pomTime: +pomodoroTime,
      shortTime: +shortBreak,
      longTime: +longBreak,
    };

    dispatch(setTimes(data));
    props.onCloseModal(false);
  };

  useEffect(
    () => (setPomodoroTime(pomo), setShortBreak(short), setLongBreak(long)),
    [pomo, short, long]
  );

  const changeInputHandlerLongBreak = (e) => {
    dispatch(setInterval(e.target.value));
  };

  const autoStartShort = () => {
    dispatch(setAutoBreaks());
  };
  const autoPomoStart = () => {
    dispatch(setPomodoros());
  };

  return (
    <div className={classes.container}>
      {/* nav */}
      <div className={classes.navModal}>
        <div className={classes.navModal1}>
          <h2>TIMER SETTIG</h2>
        </div>
        <div className={classes.closes}>
          <img
            alt="close"
            src={close}
            onClick={() => props.onCloseModal(false)}
          />
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
          <Input
            type="number"
            defaultValue={pomo}
            onChange={pomodoroTimeChangeHandler}
          />
          <Input
            type="number"
            defaultValue={short}
            onChange={shortbreakTimeChangeHandler}
          />
          <Input
            type="number"
            defaultValue={long}
            onChange={longBreakTimeChangeHandler}
          />
        </div>
      </div>
      {/* header */}
      <div className={classes.headerModal}>
        <h4>Auto start Breaks?</h4>
        <Input
          onChange={autoStartShort}
          type="checkbox"
          checked={autoStartBreaks}
        />
      </div>
      {/* header2 */}
      <div className={classes.headerModal2}>
        <h4>Auto start Pomodoros?</h4>
        <Input
          onChange={autoPomoStart}
          type="checkbox"
          checked={autoStartPomo}
        />
      </div>
      {/* header3 */}
      <div className={classes.headerModal3}>
        <h4>Long Break interval</h4>
        <Input
          min={'1'}
          value={intevalInput}
          type="number"
          onChange={changeInputHandlerLongBreak}
        />
      </div>
      {/* footer */}
      <div className={classes.footer}>
        <Button onClick={formChangeHandler}>OK</Button>
      </div>
    </div>
  );
};

export default ModalOverlay;
