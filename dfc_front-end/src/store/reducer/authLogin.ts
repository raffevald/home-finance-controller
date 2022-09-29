import { createSlice } from "@reduxjs/toolkit";

export const authLoginSlice = createSlice({
  name: 'authLogin',
  initialState: {
    authLogin: [],
    isLoading: false
  },
  reducers: {
    getAuthLoginFetch: (state) => {
      state.isLoading = true;
    },
    getAuthLoginSuccess: (state, action) => {
      state.authLogin = action.payload;
      state.isLoading = false;
    },
    getAuthLoginFailure: (state) => {
      state.isLoading = false;
    }
  }
});

export const { getAuthLoginFetch, getAuthLoginSuccess, getAuthLoginFailure } = authLoginSlice.actions;
export default authLoginSlice.reducer;

// import { createAction, createReducer } from '@reduxjs/toolkit';

// const INITIAL_STATE = {
//   authLogin: [],
// };

// export const setAuthLogin = createAction('AUTH_SET_LOGIN');

// export default createReducer(INITIAL_STATE, {
//   [setAuthLogin.type]: (state, action) => ({
//     ...state,
//     authLogin: action.payload,
//   }),
// });
