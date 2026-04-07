import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";

const Layout = () => {
  return (
    <>
      <Header />

      <div className="contentMain flex">
        {/* Sidebar */}
        <div className="sidebarWrapper w-[18%] shadow">
          <SideBar />
        </div>

        <div className="contentRight px-3 py-4 w-[82%]">
          <Dashboard />
        </div>
      </div>
{/* 
      <div className="container py-5">
        <Outlet />
      </div> */}
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
