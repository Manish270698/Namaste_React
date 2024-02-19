import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/** Below will load different components based on path */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contactus",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Error />
      },
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
