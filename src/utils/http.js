import axios from "axios";
import logger from "./logger";
import { ApiHttpError, ApiResultError } from "./error";
import querystring from "querystring";
import { parse } from "url";
import config from "../../config";

const baseURLs = config.apiBaseURL;
/* eslint-disable global-require,import/no-dynamic-require */
const baseURL = baseURLs[process.env.NODE_ENV || "development"];

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  paramsSerializer: params => querystring.stringify(params),
  headers: { "Content-Type": "application/json" },
  responseType: "json"
});

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    let { method, url, params, data } = config;
    logger.info("请求信息-->", method, url, params || data);
    return config;
  },
  error => {
    logger.info("错误信息-->", error);
    return Promise.reject(new ApiHttpError(400, error.message));
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    let {
      status,
      data,
      config: { url }
    } = response;
    let { path } = parse(url);
    logger.info("返回成功信息-->", status, path, data);
    return response;
  },
  error => {
    logger.info("返回失败信息-->", error);
    if (error.response) {
      let { status, statusText } = error.response;
      return Promise.reject(new ApiHttpError(status, statusText));
    } else {
      if (error.message.startsWith("timeout of ")) {
        return Promise.reject(new ApiHttpError(408, "请求超时"));
      } else {
        return Promise.reject(new ApiHttpError(500, error.message));
      }
    }
  }
);

function ajaxWithDispatch(dispatch, TYPES, config) {
  return instance.request(config).then(
    response => {
      logger.info("success", response);
      dispatch({
        type: TYPES,
        payload: { list: response.data.content, status: 1 }
      });
      resolve(response.data.content);
    },
    reject => {
      logger.info("reject", reject);
      dispatch({
        type: TYPES,
        payload: { list: null, status: -1 }
      });
      resolve(null);
    }
  );
}

export default {
  get: url => {
    return instance.get(url);
  },
  post: (url, data) => {
    return instance.post(url, data);
  },
  postAndDispatch: (
    dispatch,
    TYPES,
    url,
    data = {},
    { onUploadProgress } = {}
  ) => {
    return ajaxWithDispatch(dispatch, TYPES, {
      url,
      method: "POST",
      data,
      onUploadProgress
    });
  },
  getAndDispatch: (
    dispatch,
    TYPES,
    url,
    data = {},
    { onUploadProgress } = {}
  ) => {
    return ajaxWithDispatch(dispatch, TYPES, {
      url,
      method: "GET",
      data,
      onUploadProgress
    });
  }
};
