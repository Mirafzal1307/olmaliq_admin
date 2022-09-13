import HttpClient from "../HttpClient";

export function uploadImage(data: any){
  return HttpClient().post(`/uploads/create`, data);
}

export function deleteUploadImage(id: string){
  return HttpClient().delete(`/uploads/delete/${id}`);
}