import { useRoutes } from 'react-router-dom'
import Home from "./core/components/Home"
import Dashboard from "./core/components/Dashboard"
import Users from "./core/components/Users"

const MainRoutes = () => {
  return useRoutes([
    {
      path: "/react-material-admin",
      element: <Home />,
      title: "Home"
    },
    {
      path: "/react-material-admin/dashboard",
      element: <Dashboard />
    },
    {
      path: "/react-material-admin/users",
      element: <Users />
    },
  ])
}

export default MainRoutes