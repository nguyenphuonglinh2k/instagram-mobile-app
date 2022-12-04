import { call, put } from "redux-saga/effects";
import { ApiConstant, AppConstant } from "const";
import { AuthService } from "services";
import AuthActions from "reduxStore/auth.redux";
import { toCamel } from "utils/index";
import clientStorage from "utils/clientStorage";

export function* postLoginRequest(action) {
  try {
    const response = yield call(AuthService.postSignIn, action.data);

    console.log(response);

    if (response.status === ApiConstant.STT_OK) {
      const { accessToken } = toCamel(response.data);

      const bearToken = `Bearer ${accessToken}`;
      clientStorage.set(AppConstant.AUTH_TOKEN_KEY, bearToken);

      yield put(
        AuthActions.authSuccess({
          token: bearToken,
        }),
      );
    } else {
      yield put(AuthActions.authFailure(response.data));
    }
  } catch (error) {
    yield put(AuthActions.authFailure(error));
  }
}
