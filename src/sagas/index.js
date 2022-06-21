/**
 * Saga index: connects action type and saga
 */

import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { PostTypes } from "store/post.redux";

/* ------------- Sagas ------------- */

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    // Post
    takeLatest(PostTypes.REQUEST_GET_POSTS),
  ]);
}
