import { createAction } from '@reduxjs/toolkit';

const setUserInfo = createAction<object>('authActions/setUserInfo');

export default { setUserInfo };
