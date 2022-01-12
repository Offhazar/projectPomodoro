import { createSlice } from '@reduxjs/toolkit';

const init = {
  saveMoreTime: { name: 'pomodoro', time: 1 },
  times: {
    pomTime: 25,

    shortTime: 1,

    longTime: 15,
  },
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
  },
});

export const { setTimes, setCurrentTime, reset } = SettingSlice.actions;

export default SettingSlice;
