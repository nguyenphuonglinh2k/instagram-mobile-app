import Api from "./api";
import axios from "axios";
import { ApiConstant, AppConstant } from "const";
import store from "reduxStore";
import StringFormat from "string-format";
import clientStorage from "utils/clientStorage";

const axiosConfig = {
  headers: {
    authorization: store.getState().authRedux.token,
  },
};

export const postCloudinaryUpload = async data => {
  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/coders-tokyo/image/upload",
    data,
    { headers: ApiConstant.HEADER_FORM_DATA_DEFAULT },
  );

  return response;
};

export const getPosts = () => Api.get(ApiConstant.GET_POSTS);

export const getMyPosts = userId => {
  return Api.get(
    StringFormat(ApiConstant.GET_MY_POSTS, { userId }),
    axiosConfig,
  );
};

export const getMyLikes = async userId => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.get(StringFormat(ApiConstant.GET_MY_LIKE, { userId }), {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const getComments = postId =>
  Api.get(StringFormat(ApiConstant.GET_COMMENTS, { postId }), axiosConfig);

export const postActionLike = (data, userId) =>
  Api.post(
    StringFormat(ApiConstant.POST_ACTION_LIKE, { userId }),
    data,
    axiosConfig,
  );

export const postComment = (data, postId, userId) =>
  Api.post(
    StringFormat(ApiConstant.POST_COMMENT, { userId, postId }),
    data,
    axiosConfig,
  );

export const postMyPost = (data, userId) =>
  Api.post(
    StringFormat(ApiConstant.POST_MY_POST, { userId }),
    data,
    axiosConfig,
  );
