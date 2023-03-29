import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import HomePage from "../pages/home";
import ProtectedRoutes from "./ProtectedRoutes";
import { CartProvider } from "../context/CartContext";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/home"
          element={
            <CartProvider>
              <HomePage />
            </CartProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export { RoutesMain };
