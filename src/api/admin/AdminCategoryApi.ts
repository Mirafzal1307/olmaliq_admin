import HttpClient from "../HttpClient";

export function getSubCategory(data: object = {}) {
  return HttpClient().get(`/subcategory`, data);
}
