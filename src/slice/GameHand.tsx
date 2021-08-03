import {createSlice} from '@reduxjs/toolkit';
export const initialGamerHand: string = '';
export const initialPCHand: string = '';
export const GameHand = createSlice({
  name: 'GameHand',
  initialState: {hand: initialGamerHand, pcHand: initialPCHand},
  reducers: {
    hand: (state, action) => {
      state.hand = '';
      state.hand = action.payload;
    },
    randomHand: (state, action) => {
      state.pcHand = '';
      state.pcHand = action.payload;
    },
  },
});

export const {hand, randomHand} = GameHand.actions;
export default GameHand.reducer;
