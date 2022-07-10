import Api from "./api";
import { ApiConstant } from "const";
import store from "reduxStore";
import StringFormat from "string-format";

const axiosConfig = {
  headers: {
    authorization: store.getState()?.authRedux?.token,
  },
};

export const getFollowers = userId =>
  Api.get(StringFormat(ApiConstant.GET_FOLLOWERS, { userId }), axiosConfig);

export const getFollowing = userId =>
  Api.get(StringFormat(ApiConstant.GET_FOLLOWING, { userId }), axiosConfig);

export const getUserInfo = userId =>
  Api.get(StringFormat(ApiConstant.GET_USER_INFO, { userId }));

export const putUserInfo = (userId, data) =>
  Api.put(
    StringFormat(ApiConstant.PUT_USER_INFO, { userId }),
    data,
    axiosConfig,
  );
