import HttpClient from "../HttpClient";

export function getCategory(data: object = {}) {
  return HttpClient().get(`/category`, data);
}

export function getChildCategory(data: object = {}){
  return HttpClient().get(`/subcategory`, data)
}

export function getSubChildCategory(data: object = {}){
  return HttpClient().get(`/childcategory`, data);
}
export function postCategoryUpload(data: object = {}){
  return HttpClient().post(`/uploads`, data);
}

export function deleteSubCategory(id: string){
  return HttpClient().delete(`/subcategory/delete/${id}`)
}