import { createSlice } from '@reduxjs/toolkit';

const init = {
  ['POMODOR']: {
    minutes: '0',
    seconds: '0',
  },
  ['SHORT_BREAK']: {
    minutes: '0',
    seconds: '0',
  },
  ['LONG_BREAK']: {
    minutes: '0',
    seconds: '0',
  },
};

const SettingSlice = createSlice({
  name: 'settings',
  initialState: init,
  reducers: {
    pomo(state, actions) {
      state['POMODOR'].minutes = actions.payload;
    },
    shortBreak(state, actions) {
      state['SHORT_BREAK'].minutes = actions.payload;
    },
    longBreak(state, actions) {
      state['LONG_BREAK'].minutes = actions.payload;
    },
  },
});

export const settings = SettingSlice.actions;
export default SettingSlice;
