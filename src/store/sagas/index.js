import { takeEvery } from "@redux-saga/core/effects";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga,
} from "./auth";
import * as actionTypes from "../actions/actionTypes";

// listen and execute logoutSaga
export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_LOGOUT_ASYNC, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT_ASYNC, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_REQUEST, authUserSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_REQUEST, authCheckStateSaga);
}
