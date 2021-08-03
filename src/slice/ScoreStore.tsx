import {createSlice} from '@reduxjs/toolkit';
export const initialScore: number = 0;
export const ScoreStore = createSlice({
  name: 'ScoreStore',
  initialState: {score: initialScore},
  reducers: {
    total: (state, action) => {
      state.score < 0
        ? (state.score = 0)
        : (state.score = state.score + action.payload);
    },
  },
});

export const {total} = ScoreStore.actions;
export default ScoreStore.reducer;
