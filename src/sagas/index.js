/**
 * Saga index: connects action type and saga
 */
// import createSagaMiddleware from "redux-saga";

import { all, takeLatest } from "redux-saga/effects";

/* ------------- Types ------------- */
import { UserTypes } from "reduxStore/user.redux";
import { AuthTypes } from "../reduxStore/auth.redux";

/* ------------- Sagas ------------- */
import {
  getFollowersRequest,
  getFollowingRequest,
  getUserInfoRequest,
} from "./user.saga";
import { postLoginRequest, postConfirmOtpRequest } from "./auth.saga";

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    // Auth
    takeLatest(AuthTypes.POST_LOGIN_REQUEST, postLoginRequest),
    takeLatest(AuthTypes.POST_CONFIRM_OTP_REQUEST, postConfirmOtpRequest),

    // User
    takeLatest(UserTypes.GET_FOLLOWERS_REQUEST, getFollowersRequest),
    takeLatest(UserTypes.GET_FOLLOWING_REQUEST, getFollowingRequest),
    takeLatest(UserTypes.GET_USER_INFO_REQUEST, getUserInfoRequest),
  ]);
}

/* ------------- Saga Middleware ------------- */
// const sagaMiddleware = createSagaMiddleware();

// // kick off root saga
// sagaMiddleware.run(root);
