import HttpClient from "../HttpClient";

export function getCategory(data: object = {}) {
  return HttpClient().get(`/categories`, data);
}

export function getChildCategory(data: object = {}){
  return HttpClient().get(`/subcategories`, data)
}

export function getSubChildCategory(data: object = {}){
  return HttpClient().get(`/childcategories`, data);
}
export function postCategoryUpload(data: any){
  return HttpClient().post(`/uploads/create`, data);
}
// export function postCategoryUploadTwo(data: any){
//   return HttpClient().post(`/uploads/create`, data);
// }

export function deleteSubCategory(id: string){
  return HttpClient().delete(`/subcategories/delete/${id}`)
}