import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import actions from './actions';

interface UserState {
  user?: {
    name?: string;
  };
  token?: string;
}

export const initialState: UserState = {
  user: {},
  token: '',
};

export default createReducer(initialState, builder =>
  builder.addCase(actions.setUserInfo, (state, action: PayloadAction<UserState>) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
  })
);
