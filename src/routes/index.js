import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Checkout from "../pages/Checkout";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute path="/checkout">
            <Checkout />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
