import { configureStore } from '@reduxjs/toolkit';
import showSlice from './Switch';
import SettingSlice from './Settings';

const store = configureStore({
  reducer: {
    show: showSlice.reducer,
    settings: SettingSlice.reducer,
  },
});

export default store;
