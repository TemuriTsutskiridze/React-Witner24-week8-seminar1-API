import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./pages/Posts.tsx";
import Post from "./pages/Post.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/posts/:id",
    element: <Post />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
