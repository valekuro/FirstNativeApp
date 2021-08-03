import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import GameHand from '../slice/GameHand';
import ScoreStore from '../slice/ScoreStore';
export const store = configureStore({
  reducer: {
    GameHand,
    ScoreStore,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
