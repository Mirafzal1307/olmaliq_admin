import HttClient from "../HttpClient";

export function getUsersList(data: object = {}) {
  return HttClient().get(`/users`, data);
}
