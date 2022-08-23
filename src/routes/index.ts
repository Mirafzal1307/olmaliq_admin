import { useRoutes } from "react-router-dom";
import MainRoutes from "./routes";

export default function Routes () {
    return useRoutes(MainRoutes)
}