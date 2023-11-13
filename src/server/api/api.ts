// import { ACCESS_TOKEN_KEY } from "@constants/token";
import { ACCESS_TOKEN_KEY } from "@/constants/auth";
import { getAppEnv } from "@/envs/index";
import { getLocalStorage } from "@/utils/localStorage";
import type { AxiosResponse } from "axios";
import Axios, { AxiosError } from "axios";
import httpStatus from "http-status-codes";
// import humps from 'humps'

// import { refreshAccessToken } from 'services/auth'

// const { camelizeKeys } = humps

export const createApi = () => {
  const accessToken = getLocalStorage(ACCESS_TOKEN_KEY);

  const _api = Axios.create({
    baseURL: getAppEnv(),
    validateStatus: (status) =>
      status >= httpStatus.OK && status < httpStatus.BAD_REQUEST, // 200 ~ 399
    headers: {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });

  _api.interceptors.request.use((config) => {
    const accessToken = getLocalStorage(ACCESS_TOKEN_KEY);
    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  });

  _api.interceptors.response.use(
    // try
    (response) => {
      return response;
    },
    // catch
    async (error) => {
      if (error instanceof AxiosError) {
        // const errorStatus = error.response?.status ?? 0;
        // if (
        //   [httpStatus.UNAUTHORIZED, httpStatus.FORBIDDEN].includes(errorStatus)
        // ) {
        //   removeLocalStorage(ACCESS_TOKEN_KEY);
        //   return window.location.replace(PAGE_PATH.SIGN_IN);
        // }
      }

      return Promise.reject(error);
    }
  );

  return _api;
};

const api = createApi();

export default api;
