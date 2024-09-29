import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import About from "./pages/AboutPage.tsx";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./i18n";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
