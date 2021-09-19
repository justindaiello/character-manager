import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@modules/Sidebar/reducers';
import { loadState } from '@utils/localStorage';

const persistedState = loadState();

const store = configureStore({
  reducer: { auth: userReducer },
  preloadedState: persistedState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
