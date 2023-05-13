import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Carts from "./pages/CartPage/CartPage";
import CartProvider from "./Providers/CartProvider";
import CheckOutPage from "./pages/CheckOut/CheckOutPage";
import LoginPage from "./pages/Login-Sign/LoginPage";
import SignupPage from "./pages/Login-Sign/SignupPage";
import AuthProvider from "./Providers/AuthProvider";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
