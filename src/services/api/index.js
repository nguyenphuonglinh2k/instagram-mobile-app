import axios from "axios";
import { ApiConstant, AppConstant } from "const";
import clientStorage from "utils/clientStorage";

const requestAbortCode = "ECONNABORTED";

export const defaultConfig = {
  baseURL: ApiConstant.BASE_URL,
  headers: ApiConstant.HEADER_DEFAULT,
  timeout: ApiConstant.TIMEOUT,
};
const axiosInstance = axios.create(defaultConfig);

const ApiContainer = class {
  constructor() {
    this.token = null;
  }

  async headers(params) {
    const keys = Object.keys(params);
    keys.map(key => {
      axiosInstance.defaults.headers.common[key] = params[key];
    });
  }

  async getToken() {
    const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);
    this.token = token;
  }

  async get(endpoint, params = {}) {
    try {
      // const authToken = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

      const response = await axiosInstance.get(endpoint, params);
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(endpoint, body = {}, params = {}) {
    try {
      const response = await axiosInstance.post(endpoint, body, params);
      return response;
    } catch (error) {
      this.handleError(error);
      return error.response;
    }
  }

  async put(endpoint, body = {}, params = {}) {
    try {
      const response = await axiosInstance.put(endpoint, body, params);
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(endpoint, body) {
    try {
      const response = await axiosInstance.delete(endpoint, { data: body });
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response && error.response.status === ApiConstant.STT_OK) {
      // Handle 401
    }
    if (
      error.code === requestAbortCode ||
      ("response" in error && error.response === undefined)
    ) {
      // delay(1000);
      error.recall = true;
    }
    throw error;
  }
};

const api = new ApiContainer();

export default api;