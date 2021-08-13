import { takeEvery } from "@redux-saga/core/effects";
import { logoutSaga } from "./auth";
import * as actionTypes from "../actions/actionTypes";

// listen and execute logoutSaga
export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_LOGOUT_ASYNC, logoutSaga);
}
