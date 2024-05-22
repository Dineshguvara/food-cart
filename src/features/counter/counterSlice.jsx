 // counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const { cardId } = action.payload;
      state[cardId] = (state[cardId] || 0) + 1;
    },
    decrement: (state, action) => {
      const { cardId } = action.payload;
      state[cardId] = (state[cardId] || 0) - 1;
    },
    setCount: (state, action) => {
      const { cardId, count } = action.payload;
      state[cardId] = count;
    },
  },
});

export const { increment, decrement, setCount } = counterSlice.actions;
export default counterSlice.reducer;
