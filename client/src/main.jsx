import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import RootLayout from "./components/layout/RootLayout.jsx";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import CoverLetter from "./pages/CoverLetter";
import Reminders from "./pages/Schedule";
import NotFound from "./pages/NotFound.jsx";
import "./index.css";
import Schedule from "./pages/Schedule";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/applications", element: <Applications /> },
      { path: "/schedule", element: <Schedule /> },
      { path: "/resume", element: <Resume /> },
      { path: "/cover-letter", element: <CoverLetter /> },
    ],
  },
  { path: "/auth", element: <Auth /> },
  { path: "*", element: <NotFound /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
