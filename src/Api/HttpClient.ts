// import { API_URL } from "../constants/ApiConstants";

// import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";

// class ApiClient {
//   instance: AxiosInstance;
//   constructor(baseURL: any) {
//     this.instance = axios.create({
//       baseURL,
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//     });
//   }

//   fetch<T>(config: AxiosRequestConfig): AxiosPromise<T> {
//     return this.instance({
//       ...config,
//       headers: {
//         ...config.headers,
//       },
//     });
//   }
//   get<T>(url: string, params?: any): AxiosPromise<T> {
//     return this.fetch<T>({ method: "GET", url, params });
//   }

//   delete<T>(url: string, data?: any): AxiosPromise<T> {
//     return this.fetch<T>({ method: "DELETE", url, data });
//   }

//   post<T>(url: string, data: any): AxiosPromise<T> {
//     return this.fetch<T>({ method: "POST", url, data });
//   }

//   put<T>(url: string, data: any): AxiosPromise<T> {
//     return this.fetch<T>({ method: "PUT", url, data });
//   }
// }
// export default () => new ApiClient(API_URL);

import { API_URL } from "../constants/ApiConstants";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
} from "axios";
class HttpClient {
  instance: AxiosInstance;

  constructor(baseURL: string) {
    
    this.instance = axios.create({
      baseURL,
    });
    console.log(this.instance);

    this.instance.interceptors.request.use(
      function (config) {
        console.info(config);
        return config;
      },
      function (error: AxiosError) {
        console.error(
          "AXIOS: request use error --",
          error.message,
          error.response,
          error.stack
        );
        return Promise.reject(error);
      }
    ); 
    this.instance.interceptors.request.use(
      (response) => {
        console.log(response);
return response},
      function (error: AxiosError) {
        console.error(
          "AXIOS: request use error --",
          error.message,
          error.response,
          error.stack
        );
        return Promise.reject(error);
      }
    );
  }

  fetch<T>(config: AxiosRequestConfig): AxiosPromise<T> {
    return this.instance({
      ...config,
      headers: {
        ...config.headers,
      },
    });
  }

  get<T>(
    url: string,
    params?: any,
  ): AxiosPromise<T> {
    return this.fetch<T>({ method: "GET", url, params });
  }

  delete<T>(
    url: string,
    data?: any,
  ): AxiosPromise<T> {
    return this.fetch<T>({ method: "DELETE", url, data });
  }

  post<T>(
    url: string,
    data: any,
  ): AxiosPromise<T> {
    return this.fetch<T>({ method: "POST", url, data });
  }

  put<T>(
    url: string,
    data: any,
  ): AxiosPromise<T> {
    return this.fetch<T>({ method: "PUT", url, data });
  }
}

export default () =>
  new HttpClient(API_URL);