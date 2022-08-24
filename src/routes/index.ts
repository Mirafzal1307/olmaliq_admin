import { useRoutes } from "react-router-dom";
import MainRoutes from "./routes";

export default function RoutesApi () {
    return useRoutes(MainRoutes)
}