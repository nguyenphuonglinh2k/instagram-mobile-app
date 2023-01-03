import { call, put, all } from "redux-saga/effects";
import { ApiConstant, AppConstant } from "const";
import { AuthService } from "services";
import AuthActions from "reduxStore/auth.redux";
import UserActions from "reduxStore/user.redux";
import clientStorage from "utils/clientStorage";

export function* postLoginRequest(action) {
  try {
    const response = yield call(AuthService.postSignIn, action.data);

    if (response.status === ApiConstant.STT_OK) {
      const { token, user, createdOtpTime } = response.data;

      const bearToken = `Bearer ${token}`;

      clientStorage.set(AppConstant.AUTH_TOKEN_KEY, bearToken);
      clientStorage.set(AppConstant.USER_KEY, JSON.stringify(user));

      yield all([
        put(
          AuthActions.authSuccess({
            token: bearToken,
            user,
            createdOtpTime,
          }),
        ),
        put(
          UserActions.userSuccess({
            user,
          }),
        ),
      ]);
    } else {
      yield put(AuthActions.authFailure(response.data));
    }
  } catch (error) {
    yield put(AuthActions.authFailure(error));
  }
}

export function* postConfirmOtpRequest(action) {
  try {
    const response = yield call(AuthService.confirmOtp, action.data);

    if (response.status === ApiConstant.STT_OK) {
      yield put(
        AuthActions.authSuccess({
          isLoggedIn: true,
        }),
      );
    } else {
      yield put(AuthActions.authFailure(response.data));
    }
  } catch (error) {
    yield put(AuthActions.authFailure(error));
  }
}
