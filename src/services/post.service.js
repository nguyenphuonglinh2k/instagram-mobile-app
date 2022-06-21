import Api from "./api";
import axios from "axios";
import { ApiConstant } from "const";

export const postCloudinaryUpload = async data => {
  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/coders-tokyo/image/upload",
    data,
    { headers: ApiConstant.HEADER_FORM_DATA_DEFAULT },
  );

  return response;
};

export const getPosts = () => Api.get(ApiConstant.GET_POSTS);
