import Api from "./api";
import axios from "axios";
import { ApiConstant, AppConstant } from "const";
// import store from "reduxStore";
import StringFormat from "string-format";
import clientStorage from "utils/clientStorage";

const axiosConfig = {
  headers: {
    authorization: null, //store.getState()?.authRedux?.token
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

export const getMyPosts = async userId => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.get(StringFormat(ApiConstant.GET_MY_POSTS, { userId }), {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const getMyLikes = async userId => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.get(StringFormat(ApiConstant.GET_MY_LIKE, { userId }), {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const getComments = async postId => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.get(StringFormat(ApiConstant.GET_COMMENTS, { postId }), {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const postActionLike = async (data, userId) => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.post(
    StringFormat(ApiConstant.POST_ACTION_LIKE, { userId }),
    data,
    {
      headers: {
        authorization: axiosConfig.headers.authorization || token,
      },
    },
  );
};

export const postComment = async (data, postId, userId) => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.post(
    StringFormat(ApiConstant.POST_COMMENT, { userId, postId }),
    data,
    {
      headers: {
        authorization: axiosConfig.headers.authorization || token,
      },
    },
  );
};

export const postMyPost = async (data, userId) => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.post(StringFormat(ApiConstant.POST_MY_POST, { userId }), data, {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};
