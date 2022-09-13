import HttpClient from "../HttpClient";

export function getCategory(data: object = {}) {
  return HttpClient().get(`/categories`, data);
}

export function postCategory(data: object = {}) {
  return HttpClient().post(`/category/create`, data);
}

export function getChildCategory(data: object = {}){
  return HttpClient().get(`/subcategories`, data)
}

export function getSubChildCategory(data: object = {}){
  return HttpClient().get(`/childcategories`, data);
}

export function deleteSubCategory(id: string){
  return HttpClient().delete(`/subcategories/delete/${id}`)
}