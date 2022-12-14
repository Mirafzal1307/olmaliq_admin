import { API_URL } from "../constants/ApiConstants";

import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";

class ApiClient {
  instance: AxiosInstance;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(baseURL: any) {
    this.instance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  fetch<T>(config: AxiosRequestConfig): AxiosPromise<T> {
    return this.instance({
      ...config,
      headers: {
        ...config.headers,
      },
    });
  }
  get<T>(url: string, params?: unknown): AxiosPromise<T> {
    return this.fetch<T>({ method: "GET", url, params });
  }

  delete<T>(url: string, data?: unknown): AxiosPromise<T> {
    return this.fetch<T>({ method: "DELETE", url, data });
  }

  post<T>(url: string, data: unknown): AxiosPromise<T> {
    return this.fetch<T>({ method: "POST", url, data });
  }

  put<T>(url: string, data: unknown): AxiosPromise<T> {
    return this.fetch<T>({ method: "PUT", url, data });
  }
}
export default () => new ApiClient(API_URL);
