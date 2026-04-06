import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container py-5">
        <Outlet />
      </div>
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
