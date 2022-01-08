import { createSlice } from '@reduxjs/toolkit';

const init = {
  //   ['POMODOR']: {
  //     minutes: '0',
  //     seconds: '0',
  //   },
  //   ['SHORT_BREAK']: {
  //     minutes: '0',
  //     seconds: '0',
  //   },
  //   ['LONG_BREAK']: {
  //     minutes: '0',
  //     seconds: '0',
  //   },

  currentTime: { name: 'pomodoro', time: 25 },
  times: {
    pomTime: 25,

    shortTime: 25,

    longTime: 25,
  },
};

const SettingSlice = createSlice({
  name: 'settings',
  initialState: init,
  reducers: {
    // pomo(state, actions) {
    //   state['POMODOR'].minutes = actions.payload;
    // },
    // shortBreak(state, actions) {
    //   state['SHORT_BREAK'].minutes = actions.payload;
    // },
    // longBreak(state, actions) {
    //   state['LONG_BREAK'].minutes = actions.payload;
    // },
    setTimes(state, action) {
      state.times = action.payload;
    },
    setCurrentTime(state, action) {
      state.currentTime = action.payload;
    },
  },
});

export const { setTimes, setCurrentTime } = SettingSlice.actions;

export default SettingSlice;
