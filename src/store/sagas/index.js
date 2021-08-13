import { takeEvery } from "@redux-saga/core/effects";
import { logoutSaga, checkAuthTimeoutSaga } from "./auth";
import * as actionTypes from "../actions/actionTypes";

// listen and execute logoutSaga
export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_LOGOUT_ASYNC, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT_ASYNC, checkAuthTimeoutSaga);
}
