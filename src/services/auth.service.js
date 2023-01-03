import Api from "./api";
import { ApiConstant } from "const";

export const postSignIn = data => Api.post(ApiConstant.POST_SIGN_IN, data);

export const postSignUp = data => Api.post(ApiConstant.POST_SIGN_UP, data);

export const confirmOtp = data => Api.post(ApiConstant.POST_CONFIRM_OTP, data);
