import Api from "./api";
import { ApiConstant, AppConstant } from "const";
import store from "reduxStore";
import StringFormat from "string-format";
import clientStorage from "utils/clientStorage";

const axiosConfig = {
  headers: {
    authorization: store.getState().authRedux.token,
  },
};

export const getFollowers = async userId => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.get(StringFormat(ApiConstant.GET_FOLLOWERS, { userId }), {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const getFollowing = async userId => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.get(StringFormat(ApiConstant.GET_FOLLOWING, { userId }), {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const getUserInfo = userId =>
  Api.get(StringFormat(ApiConstant.GET_USER_INFO, { userId }));

export const putUserInfo = async (userId, data) => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.put(StringFormat(ApiConstant.PUT_USER_INFO, { userId }), data, {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const putFollowAction = async (userId, followUserId) => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.put(
    StringFormat(ApiConstant.PUT_FOLLOW_ACTION, { userId, followUserId }),
    {},
    {
      headers: {
        authorization: axiosConfig.headers.authorization || token,
      },
    },
  );
};

export const putPasswordChangeAction = async (userId, data) => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.put(
    StringFormat(ApiConstant.PUT_PASSWORD_CHANGE_ACTION, { userId }),
    data,
    {
      headers: {
        authorization: axiosConfig.headers.authorization || token,
      },
    },
  );
};
