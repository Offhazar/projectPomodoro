import { createSlice } from '@reduxjs/toolkit';

const init = {
  saveMoreTime: { name: 'pomodoro', time: 1 },
  times: {
    pomTime: 25,

    shortTime: 1,

    longTime: 15,
  },
  autoBreaks: false,

  autoPomodoros: false,

  interval: 1,
};

const SettingSlice = createSlice({
  name: 'settings',
  initialState: init,
  reducers: {
    setTimes(state, action) {
      state.times = action.payload;
    },
    setCurrentTime(state, action) {
      state.saveMoreTime = action.payload;
    },
    setAutoBreaks(state) {
      state.autoBreaks = !state.autoBreaks;
    },
    setPomodoros(state) {
      state.autoPomodoros = !state.autoPomodoros;
    },
    setInterval(state, action) {
      state.interval = action.payload;
    },
    setIntervalMin(state) {
      state.interval = state.interval - 1;
    },
  },
});

export const {
  setTimes,
  setCurrentTime,
  reset,
  setAutoBreaks,
  setPomodoros,
  setInterval,
  setIntervalMin,
} = SettingSlice.actions;

export default SettingSlice;
