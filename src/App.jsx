import "./App.css";
import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GeneratePki from "./components/GeneratePki";
import AllPkis from "./components/AllPkis";
import Profile from "./components/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Dashboard />,
    children: [
      {
        path: "/home",
        element: <GeneratePki />,
      },
      {
        path: "/home/new",
        element: <AllPkis />,
      },
      {
        path: "/home/profile",
        element: <Profile />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </>
  );
};

export default App;
