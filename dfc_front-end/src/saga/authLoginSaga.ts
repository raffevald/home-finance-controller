import { call, put, takeEvery} from 'redux-saga/effects';
import { getAuthLoginSuccess } from  '../store/reducer/authLogin';


function* workGetAuthLogin() {
  const user = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
  const formattedUser = yield user.json();
  const formattedUserShortened = formattedUser(0,10);
  yield put(getAuthLoginSuccess(formattedUserShortened));
}

function* autLoginSaga() {
  yield takeEvery('authLogin/getAuthLoginFetch', workGetAuthLogin)
}

export default autLoginSaga;
