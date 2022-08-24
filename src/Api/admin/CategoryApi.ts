import HttpClient from "../HttpClient";

export function getUsers(): any {
    return HttpClient().get("/users")
}