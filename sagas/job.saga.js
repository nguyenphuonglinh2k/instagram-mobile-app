import { call, put } from "redux-saga/effects";
import { ApiConstant } from "const";
import { JobService } from "services";
import JobActions from "reduxStore/job.redux";
import { toCamel } from "utils/index";

export function* getJobsRequest() {
  try {
    const response = yield call(JobService.getJobs);

    if (response.status === ApiConstant.STT_OK) {
      yield put(
        JobActions.jobSuccess({
          jobs: toCamel(response.data.data),
        }),
      );
    } else {
      yield put(JobActions.jobFailure(response.data));
    }
  } catch (error) {
    yield put(JobActions.jobFailure(error));
  }
}
