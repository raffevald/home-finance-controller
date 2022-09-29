import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import authLogin from './reducer/authLogin';
// import authLoginSaga from '../saga/authLoginSaga';


const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    authLogin: authLogin,
  },
  // middleware: [saga]
});
// saga.run(authLoginSaga);
