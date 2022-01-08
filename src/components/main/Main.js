import classes from './Main.module.css';

import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TimerValue from '../pages/TimerValue';

const Main = () => {
  return (
    <>
      <TimerValue />
      {/* <Route path="/" exact>
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
        </Route> */}
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
