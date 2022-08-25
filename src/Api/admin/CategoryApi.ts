import { Iuser } from './type';
import HttpClient from "../HttpClient";
interface Iusers {
    user: Iuser[]
}
export function getUsers():any {
    return HttpClient().get<Iuser[]>("/users")
}