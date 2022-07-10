import { call, put } from "redux-saga/effects";
import { ApiConstant } from "const";
import { UserService } from "services";
import UserActions from "reduxStore/user.redux";

export function* getUserInfoRequest(action) {
  try {
    const { data } = action;

    const response = yield call(UserService.getUserInfo, data);

    if (response.status === ApiConstant.STT_OK) {
      yield put(
        UserActions.userSuccess({
          user: response.data,
        }),
      );
    } else {
      yield put(UserActions.userFailure(response.data));
    }
  } catch (error) {
    yield put(UserActions.userFailure(error));
  }
}

export function* getFollowersRequest(action) {
  try {
    const { data } = action;
    const response = yield call(UserService.getFollowers, data);

    if (response.status === ApiConstant.STT_OK) {
      yield put(
        UserActions.userSuccess({
          followers: response.data,
        }),
      );
    } else {
      yield put(UserActions.userFailure(response.data));
    }
  } catch (error) {
    yield put(UserActions.userFailure(error));
  }
}

export function* getFollowingRequest(action) {
  try {
    const { data } = action;
    const response = yield call(UserService.getFollowing, data);

    if (response.status === ApiConstant.STT_OK) {
      yield put(
        UserActions.userSuccess({
          following: response.data,
        }),
      );
    } else {
      yield put(UserActions.userFailure(response.data));
    }
  } catch (error) {
    yield put(UserActions.userFailure(error));
  }
}
