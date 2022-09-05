import HttpClient from "../HttpClient";

export function getCategory(data: object = {}) {
  return HttpClient().get(`/category`, data);
}
