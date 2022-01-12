import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Long from '../bntComponent/Long';
import NextBtn from '../bntComponent/StartBtn';
import Pomodoros from '../bntComponent/Pomdoro';
import Short from '../bntComponent/Short.js.js';
import { setCurrentTime } from '../../store/Settings';
import styles from './TimerValue.module.css';
import NextImg from '../bntComponent/NextImg';

const TimerValue = (props) => {
  const currentTime = useSelector((state) => state.settings.saveMoreTime);
  const pomo = useSelector((state) => state.settings.times.pomTime);
  const short = useSelector((state) => state.settings.times.shortTime);
  const long = useSelector((state) => state.settings.times.longTime);

  const dispatch = useDispatch();

  const [initMinutes, setInitMinutes] = useState(pomo);
  const initSeconds = 0;

  React.useEffect(() => setInitMinutes(currentTime.time), [currentTime]);

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

  // чтобы отменить таймер. не удалять
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

  function changeTimer(value) {
    pauseTimer();
    cancelTimer();
    if (checked) {
      if (
        window.confirm(
          'The timer is still running, are you sure you want to switch?'
        )
      ) {
        setInitMinutes(value.time);
        dispatch(setCurrentTime(value));
        setBodyColor(value.bodyColor);
        pauseTimer();
        cancelTimer();
      } else {
        startTimer();
      }
    } else {
      dispatch(setCurrentTime(value));
      setBodyColor(value.bodyColor);
    }
  }

  useEffect(() => {
    changeTimer({ name: 'pomodor', time: pomo, bodyColor: '#DB524D' });
  }, [pomo]);

  //

  let pomodorosNext = {
    name: 'pomodor',
    time: pomo,
    bodyColor: '#DB524D',
  };
  let shortNext = {
    name: 'shortTime',
    time: short,
    bodyColor: '#468E91',
  };
  let longNext = {
    name: 'longTime',
    time: long,
    bodyColor: '#437EA8',
  };

  const changeModeNext = () => {
    let nextTime = pomodorosNext;
    if (currentTime.name === pomodorosNext.name) nextTime = shortNext;
    if (currentTime.name === shortNext.name) nextTime = longNext;

    pauseTimer();
    if (
      window.confirm(
        'Are you sure you want to finish the round early? (The remaining time will not be counted in the report.)'
      )
    ) {
      dispatch(setCurrentTime(nextTime));
      setInitMinutes(nextTime.time);
      setBodyColor(nextTime.bodyColor);

      pauseTimer();
      cancelTimer();
    } else {
      startTimer();
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.btnKing}>
        <Pomodoros
          pomodorosNext={pomodorosNext}
          bodyColor={bodyColor}
          changeTimer={changeTimer}
        />
        <Short
          shortNext={shortNext}
          bodyColor={bodyColor}
          changeTimer={changeTimer}
        />
        <Long
          longNext={longNext}
          bodyColor={bodyColor}
          changeTimer={changeTimer}
        />
      </div>
      <div className={styles.btnKing}></div>
      <div>
        <div className={styles.timer}>
          {time.m < 10 ? `0${time.m}` : time.m}:
          {time.s < 10 ? `0${time.s}` : time.s}
        </div>
      </div>
      <div className={`${styles.btnStop} `}>
        <NextBtn
          bodyColor={bodyColor}
          Raspredelyator={Raspredelyator}
          checked={checked}
        />
        <NextImg checked={checked} changeModeNext={changeModeNext} />
      </div>
    </div>
  );
};
export default TimerValue;
