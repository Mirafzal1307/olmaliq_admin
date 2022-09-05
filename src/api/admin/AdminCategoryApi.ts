import HttpClient from "../HttpClient";

export function getCategory(data: object = {}) {
  return HttpClient().get(`/category`, data);
}

export function getChildCategory(data: object = {}){
  return HttpClient().get(`/childcategory`, data)
}


export function deleteSubCategory(id: string){
  return HttpClient().delete(`/subcategory/delete/${id}`)
}