import ProtectedRoute from "../components/ProtectedRoute";
import LayoutDefault from "../layout/LayoutDefault";
import Blank from "../pages/Blank";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Welcome from "../pages/Welcome";


export const routes = [
  {
    path: "/",
    element: <Blank/>,
    children: [
      {
        path: "/",
        element: <Welcome/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <LayoutDefault/>
          }
        ]
      }
    ]
  }
]