import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "fontawesome/index";
import "./index.css";

import Root from "./components/Root";
import { store } from "./app/store";

import Product from "./components/Product";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Root />,

    children: [
      {
        element: <Product />,
        index: true,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
