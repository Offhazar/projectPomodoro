import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import vector from '../../assets/Vector.png';
import { setCurrentTime } from '../../store/Settings';
import styles from './TimerValue.module.css';

const TimerValue = (props) => {
  const currentTime = useSelector((state) => state.settings.currentTime);

  // React.useEffect(() => )
  const dispatch = useDispatch();

  
  const [initMinutes, setInitMinutes] = useState(currentTime.time);
  const initSeconds = 0;
  
  React.useEffect(() => setInitMinutes(currentTime.time), [currentTime])

  
  const [time, setTime] = useState({
    m: initMinutes,
    s: initSeconds,
  });
  // пригодится при смене минут
  useEffect(() => {
    setTime({
      m: initMinutes,
      s: initSeconds,
    });
  }, [initMinutes]);

  const [timer, setTimer] = useState(null); //
  const [checked, setCheked] = useState(false); // для изменения start на pause
  const startTimer = () => {
    setCheked(true);
    let myInterval = setInterval(() => {
      setTime((time) => {
        // time пред. состояние
        const updatedTime = { ...time }; // { s: '', m: ''}
        // если секунда больше нуля, она будет уменьшаться
        if (time.s > 0) {
          updatedTime.s--;
        }
        // если всё равно нулю, останавливает таймер
        if (time.s === 0) {
          if (time.m === 0) {
            clearInterval(myInterval);
          } else if (time.m > 0) {
            updatedTime.m--;
            updatedTime.s = 59;
          } else if (updatedTime.h > 0) {
            updatedTime.m = 59;
            updatedTime.s = 59;
          }
        }
        return updatedTime;
      });
    }, 1000);
    setTimer(myInterval);
  };
  // чтобы остановить таймер
  const pauseTimer = () => {
    setCheked(false);
    clearInterval(timer);
  };

  //   чтобы отменить таймер. не удалять
  const cancelTimer = () => {
    setCheked(false);
    clearInterval(timer);
    setTime({
      m: initMinutes,
      s: initSeconds,
    });
  };

  function Raspredelyator() {
    checked ? pauseTimer() : startTimer();
  }

  const [bodyColor, setBodyColor] = React.useState('#DB524D');

  React.useEffect(
    () => (document.getElementById('root').style.background = bodyColor),
    [bodyColor]
  );

  console.log(currentTime);

  function changeTimer(value) {
    pauseTimer();
    if (checked) {
      if (window.confirm('Do you want to change Timer ?')) {
        setInitMinutes(value.time);
        dispatch(setCurrentTime(value));
        setBodyColor(value.bodyColor);
        pauseTimer();
      } else {
        startTimer();
      }
    } else {
      // setInitMinutes(value);
      // setInitMinutes(currentTime.time);
      dispatch(setCurrentTime(value));
      setBodyColor(value.bodyColor);
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.btnKing}>
        <button
          className={styles.btnFoces}
          onClick={() =>
            changeTimer({ name: 'pomodor', time: 25, bodyColor: '#DB524D' })
          }
        >
          PomoBreak
        </button>

        <button
          className={styles.btnShort}
          onClick={() =>
            changeTimer({ name: 'shortTime', time: 5, bodyColor: '#468E91' })
          }
        >
          ShortBreak
        </button>

        <button
          className={styles.btnLong}
          onClick={() =>
            changeTimer({ name: 'longTime', time: 10, bodyColor: '#437EA8' })
          }
        >
          LongBreak
        </button>
      </div>

      <div className={styles.btnKing}></div>
      <div>
        <div className={styles.timer}>
          {time.m < 10 ? `0${time.m}` : time.m}:
          {time.s < 10 ? `0${time.s}` : time.s}
        </div>
      </div>
      <div className={styles.btnStop}>
        <button className={styles.stop} onClick={Raspredelyator}>
          {checked ? 'STOP' : 'START'}
        </button>
        <img src={vector} />
      </div>
    </div>
  );
};
export default TimerValue;
