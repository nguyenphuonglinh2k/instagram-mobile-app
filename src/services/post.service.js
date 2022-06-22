import Api from "./api";
import axios from "axios";
import { ApiConstant } from "const";
import store from "reduxStore";

const axiosConfig = {
  headers: {
    authorization: store.getState()?.appRedux?.token,
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

export const postMyPost = data =>
  Api.post(ApiConstant.POST_MY_POST, data, axiosConfig);
