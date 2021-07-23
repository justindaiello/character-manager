import { configureStore } from '@reduxjs/toolkit';

import userReducer from '@modules/Sidebar/reducers';

const store = configureStore({
  reducer: { auth: userReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
