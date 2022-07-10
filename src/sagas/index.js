/**
 * Saga index: connects action type and saga
 */

import { all, takeLatest } from "redux-saga/effects";

/* ------------- Types ------------- */
import { UserTypes } from "reduxStore/user.redux";

/* ------------- Sagas ------------- */
import {
  getFollowersRequest,
  getFollowingRequest,
  getUserInfoRequest,
} from "./user.saga";

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    // User
    takeLatest(UserTypes.GET_FOLLOWERS_REQUEST, getFollowersRequest),
    takeLatest(UserTypes.GET_FOLLOWING_REQUEST, getFollowingRequest),
    takeLatest(UserTypes.GET_USER_INFO_REQUEST, getUserInfoRequest),
  ]);
}
