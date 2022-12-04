/**
 * Saga index: connects action type and saga
 */

import { all, takeLatest } from "redux-saga/effects";

/* ------------- Types ------------- */
import { UserTypes } from "reduxStore/user.redux";
import { JobTypes } from "reduxStore/job.redux";

/* ------------- Sagas ------------- */
import { getUserInfoRequest } from "./user.saga";
import { getJobsRequest } from "./job.saga";

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    // Auth

    // User
    takeLatest(UserTypes.GET_USER_INFO_REQUEST, getUserInfoRequest),

    // Job
    takeLatest(JobTypes.GET_JOBS_REQUEST, getJobsRequest),
  ]);
}
