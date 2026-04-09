import React, { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";
import { MyContext } from "./context/MyContext";
import Login from "./pages/Login/Login";

const Layout = () => {
  const { isSideBarOpen } = useContext(MyContext);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="shrink-0">
        <Header />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div
          className={`transition-all duration-300 shrink-0 h-full sticky top-0 ${
            isSideBarOpen ? "w-[18%] opacity-100" : "w-0 opacity-0"
          }`}
        >
          <SideBar />
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    // / page
    {
      path: "/admin",
      element: <Layout />, // ✅ only for protected pages
      errorElement: <h1>404 Page Not Found</h1>,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "products",
          element: <h1>Products Page</h1>,
        },
        {
          path: "orders",
          element: <h1>Orders Page</h1>,
        },
      ],
    },

    // login
    {
      path: "/admin/login",
      element: <Login />, 
    },

    //  Redirect root
    {
      path: "/",
      element: <Navigate to="/admin" replace />,
    },

    //Optional catch-all
    {
      path: "*",
      element: <h1>404 Page Not Found</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
