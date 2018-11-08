import R from 'ramda';
import * as actions from './actions';
import clearCookies from '../../utils/clearCookies';
import { alert } from '../../utils/alerts';
import { fb, socialServiceProvider } from '../../services';

const logOut = () => async dispatch => {
  try {
    await fb.logOut();
    clearCookies();
    dispatch(actions.logOutUserSuccess());
  } catch (e) {
    alert('Opps', 'Something went wrong when you try to log out, try again later');
  }
};

const createBackup = () => async (dispatch, getState) => {
  dispatch(actions.backupStart());

  const userId = R.pathOr('', ['synch', 'user', 'uid'], getState());
  const stateToSave =
    R.pickAll(['accounts', 'categories', 'transactions', 'transfers'], getState());

  try {
    await fb.createBackup(userId, stateToSave);

    dispatch(actions.backupSuccess());
    alert('Success', 'Creating backup was successfully completed');
  } catch (e) {
    dispatch(actions.backupError());
    console.log('createBackup err', e);
    alert('Opps', 'Something went wrong when you creating backup, try again later');
  }
};

const synchronizeData = () => async (dispatch, getState) => {
  dispatch(actions.synchronizationStart());

  const userId = R.pathOr('', ['synch', 'user', 'uid'], getState());
  const stateToSave =
    R.pickAll(['accounts', 'categories', 'transactions', 'transfers'], getState());

  try {
    const response = await fb.synchronizeData(userId, stateToSave);
    if (response) {
      dispatch(actions.synchronizationSuccess(response));
      alert('Success', 'Synchronization was successfully completed');
    }
  } catch (e) {
    dispatch(actions.synchronizationError());
    console.log('synchronization Err', e);
    alert('Opps', 'Something went wrong during synchronization, try again later');
  }
};

const loginWithGoogle = () => async dispatch => {
  dispatch(actions.loginUserStart());
  try {
    const googleResponse = await socialServiceProvider.signInWithGoogle();
    const { idToken, accessToken } = googleResponse;

    const res = await fb.loginWithGoogle(idToken, accessToken);

    dispatch(actions.loginUserSuccess({
      fullName: res.additionalUserInfo.profile.name,
      uid: res.user.uid,
    }));
    dispatch(synchronizeData());
  } catch (err) {
    console.log('loginUserError  ', err);
    alert('Opps', 'Something went wrong when you login, try again later');
  }
};


export default {
  loginWithGoogle,
  logOut,
  createBackup,
  synchronizeData,
};
