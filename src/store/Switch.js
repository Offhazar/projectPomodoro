import { createSlice } from '@reduxjs/toolkit';

const init = {
  showModal: false,
};

const showSlice = createSlice({
  name: 'show',
  initialState: init,
  reducers: {
    toggle(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const showAction = showSlice.actions;

export default showSlice;
