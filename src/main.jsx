import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import MainLayout from "./componets/layouts/MainLayout.jsx";
import CartPage from "./componets/pages/CartPage/CartPage.jsx";
import HomePage from "./componets/pages/HomePage/HomePage.jsx";
import "./index.css";
import { persiststore, store } from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Error 404</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home_page",
        element: <HomePage />,
      },
      {
        path: "/cart_page",
        element: <CartPage />,
      },
    ],
  },
  { 
    path: "*",
    element: <MainLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persiststore}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </PersistGate>
);
