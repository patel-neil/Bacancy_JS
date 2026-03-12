import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },

      // Protected routes
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "profile",
            element: <Profile />,
          },

          {
            element: <RoleRoute allowedRoles={["admin"]} />,
            children: [
              {
                path: "admin",
                element: <Admin />,
              },
            ],
          },
        ],
      },

      {
        path: "unauthorized",
        element: <Unauthorized />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;