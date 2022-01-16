import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Long from '../bntComponent/Long';
import NextBtn from '../bntComponent/StartBtn';
import Pomodoros from '../bntComponent/Pomdoro';
import Short from '../bntComponent/Short.js.js';
import { setCurrentTime, setIntervalMin } from '../../store/Settings';
import styles from './TimerValue.module.css';
import NextImg from '../bntComponent/NextImg';

const TimerValue = (props) => {
  const currentTime = useSelector((state) => state.settings.saveMoreTime);
  const interval = useSelector((state) => state.settings.interval);

  const pomo = useSelector((state) => state.settings.times.pomTime);
  const short = useSelector((state) => state.settings.times.shortTime);
  const long = useSelector((state) => state.settings.times.longTime);

  const autoStartPomo = useSelector((state) => state.settings.autoPomodoros);
  const autoStartBreaks = useSelector((state) => state.settings.autoBreaks);

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

  const [timer, setTimer] = useState(null); //
  const [checked, setCheked] = useState(false); // для изменения start на pause

  const startTimer = useCallback(() => {
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
    }, 100);
    setTimer(myInterval);
  }, []);

  useEffect(() => {
    if (time.s === 0) {
      if (time.m === 0) {
        clearInterval(timer);
        changeNext();
      }
    }
  }, [time]);
  const [nextLv, setNextLv] = useState(0);
  const [startNextLv, setStartNextLv] = useState(false);
  //переход на другой баттон когда заканчиваеться время
  const changeNext = () => {
    let nextTime = pomodorosNext;
    if (currentTime.name === pomodorosNext.name) {
      if (interval > 1) {
        dispatch(setIntervalMin());
        setNextLv((preva) => preva + 1);
        nextTime = shortNext;
        setStartNextLv(true);
        dispatch(setCurrentTime(nextTime));
        setInitMinutes(nextTime.time);
        setBodyColor(nextTime.bodyColor);
        cancelTimer();
      } else {
        setNextLv((preva) => preva + 1);
        nextTime = longNext;
        dispatch(setCurrentTime(nextTime));
        setInitMinutes(nextTime.time);
        setBodyColor(nextTime.bodyColor);
        setStartNextLv(true);
        cancelTimer();
      }
    }
    if (currentTime.name === shortNext.name) {
      if (interval > 0) {
        nextTime = pomodorosNext;
        dispatch(setCurrentTime(nextTime));
        setInitMinutes(nextTime.time);
        setBodyColor(nextTime.bodyColor);
        cancelTimer();
      }
    }
    if (currentTime.name === longNext.name) {
      if (interval > 1) {
        dispatch(setInterval(nextLv));
        setNextLv(0);
        nextTime = pomodorosNext;
        dispatch(setCurrentTime(nextTime));
        setInitMinutes(nextTime.time);
        setBodyColor(nextTime.bodyColor);
        cancelTimer();
      } else {
        setNextLv(0);
        nextTime = pomodorosNext;
        dispatch(setCurrentTime(nextTime));
        setInitMinutes(nextTime.time);
        setBodyColor(nextTime.bodyColor);
        cancelTimer();
      }
    }
  };

  useEffect(() => {
    if (currentTime.name === shortNext.name) {
      if (startNextLv) {
        if (autoStartBreaks) {
          startTimer();
        }
      }
    }
  }, [startNextLv, autoStartBreaks, startTimer, currentTime]);

  useEffect(() => {
    if (currentTime.name === pomodorosNext.name) {
      if (startNextLv) {
        if (autoStartPomo) {
          startTimer();
        }
      }
    }
  }, [startNextLv, autoStartPomo, startTimer, currentTime]);

  useEffect(() => {
    if (currentTime.name === longNext.name) {
      if (autoStartBreaks) {
        if (startNextLv) {
          if (autoStartPomo) {
            startTimer();
          }
        }
      }
    }
  }, [autoStartPomo, autoStartBreaks, startTimer, startNextLv, currentTime]);

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

  //функицию используеться когда нажамают на баттон
  function changeTimer(value) {
    pauseTimer();
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

  // что бы обновлять таймер когда берем значение у инпута
  useEffect(() => {
    changeTimer({ name: 'pomodor', time: pomo, bodyColor: '#DB524D' });
  }, [pomo]);

  // функиця для img next
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
