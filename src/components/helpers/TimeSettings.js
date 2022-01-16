import { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const TimerSettings = (initialTime) => {
  const currentTime = useSelector((state) => state.settings.saveMoreTime);

  const [initMinutes, setInitMinutes] = useState(initialTime);
  const initSeconds = 0;

  const [timer, setTimer] = useState(null); //
  const [checked, setCheked] = useState(false); // для изменения start на pause

  useEffect(() => setInitMinutes(currentTime.time), [currentTime]);

  const [time, setTime] = useState({
    m: initMinutes,
    s: initSeconds,
  });

  useEffect(() => {
    setTime({
      m: initMinutes,
      s: initSeconds,
    });
  }, [initMinutes]);

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

  const pauseTimer = useCallback(() => {
    setCheked(false);
    clearInterval(timer);
  }, [timer]);
  const cancelTimer = useCallback(() => {
    setCheked(false);
    clearInterval(timer);
    setTime({
      m: initMinutes,
      s: initSeconds,
    });
  }, [initMinutes, timer]);

  return {
    cancelTimer,
    pauseTimer,
    startTimer,
    checked,
    time,
    timer,
    setInitMinutes,
  };
};

export default TimerSettings;
