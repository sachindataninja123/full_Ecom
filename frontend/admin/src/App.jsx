import React, { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";
import { MyContext } from "./context/MyContext";
import Login from "./pages/Login/Login";
import SignUp from "./pages/register/SignUp";
import ProductsPage from "./pages/Products/ProductsList";
import ProductsList from "./pages/Products/ProductsList";
import HomeSliderBanner from "./pages/HomeSliderBanner/HomeSliderBanner";
import CategoryList from "./pages/Category/CategoryList";
import Dashboard from "./pages/Dashboard/Dashboard";
import SubCatList from "./pages/subCategory/SubCatList";
import Users from "./pages/Users/Users";
import Orders from "./pages/Orders/Orders";

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
    {
      path: "/admin",
      element: <Layout />,
      errorElement: <h1>404 Page Not Found</h1>,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "products",
          element: <ProductsList />,
        },
        {
          path: "home-slides",
          element: <HomeSliderBanner />,
        },
        {
          path: "category",
          element: <CategoryList />,
        },
        {
          path: "Sub-category",
          element: <SubCatList />,
        },
        {
          path: "Users",
          element: <Users />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
      ],
    },

    {
      path: "/admin/login",
      element: <Login />,
    },
    {
      path: "/admin/register",
      element: <SignUp />,
    },

    {
      path: "/",
      element: <Navigate to="/admin" replace />,
    },

    {
      path: "*",
      element: <h1>404 Page Not Found</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
