import HttpClient from "../HttpClient";

export function getSubCategory(data: object = {}) {
  return HttpClient().get(`/subcategory`, data);
}

export function getChildCategory(data: object = {}){
  return HttpClient().get(`/childcategory`, data)
}


export function deleteSubCategory(id: string){
  return HttpClient().delete(`/subcategory/delete/${id}`)
}