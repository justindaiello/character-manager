import authReducer, { initialState } from '../reducers';

import authActions from '../actions';

describe('Auth reducers', () => {
  it('returns initial state', () => {
    expect(authReducer(undefined, { type: authActions })).toEqual(initialState);
  });

  it('handles authActions/setUserInfo', () => {
    const payload = {
      user: { id: 1, name: 'Frank Ocean', email: 'frank@ocean.com' },
      token: 'abc1234',
    };

    expect(authReducer(initialState, { type: authActions.setUserInfo, payload: payload })).toEqual({
      ...initialState,
      user: payload.user,
      token: payload.token,
    });
  });
});
