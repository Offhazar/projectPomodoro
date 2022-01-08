import classes from './Main.module.css';

import PomoFocus from '../pages/PomoFocus';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import LongBreak from '../pages/LongBreak';
import ShortBreak from '../pages/ShortBreak';
import PomoBreak from '../pages/PomoBreak';

const Main = () => {
  const [initMinutes, setInitMinutes] = useState(25);
  const initSeconds = 0;

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
  function stopTimer() {
    pauseTimer();
    if (window.confirm('Are you sure ?')) {
      cancelTimer();
    } else {
      startTimer();
    }
  }
  function changeTimer(value) {
    pauseTimer();
    if (checked) {
      if (window.confirm('Do you want to change Timer ?')) {
        setInitMinutes(value);
        pauseTimer();
      } else {
        startTimer();
      }
    } else {
      setInitMinutes(value);
    }
  }

  return (
    <>
      <div className={classes.btnKing}>
        <Route path="/" exact>
          <Redirect to="/pomo" />
        </Route>
        <Route path="/pomo">
          <PomoBreak />
        </Route>
        <Route path="/short">
          <ShortBreak />
        </Route>
        <Route path="/long">
          <LongBreak />
        </Route>
      </div>
      {/* <div>
          <div>
            <div className={classes.timer}>
              {time.m < 10 ? `0${time.m}` : time.m}:
              {time.s < 10 ? `0${time.s}` : time.s}
            </div>
          </div>
          <div className={classes.btnStop}>
            <button className={classes.stop} onClick={Raspredelyator}>
              {checked ? 'PAUSE' : 'START'}
            </button>
            <img onClick={stopTimer} src={vector} />
          </div>
        </div> */}
    </>
  );
};

export default Main;
