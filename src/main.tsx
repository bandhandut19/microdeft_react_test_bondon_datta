import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router";
import rootRoute from "./routes/rootRoute.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="top-center"></Toaster>
      <RouterProvider router={rootRoute}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
