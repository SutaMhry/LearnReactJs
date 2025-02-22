import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage";
import  CartPage from "./pages/CartPage";
import  ProductDetailPage from "./pages/ProductDetailPage";
import  NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductManagementPage from "./pages/admin/ProductManagementPage";

function App() {
  const location = useLocation();

  return (
    <>
    {
      !location.pathname.startsWith("/admin") ? <Header /> : null
    }
    <Routes>
      <Route path="/login" Component={LoginPage} />
      <Route path="/admin/products" Component={ProductManagementPage} />
      <Route path="/" Component={HomePage} />
      <Route path="/cart" Component={CartPage} />
      <Route path="/product/:productId" Component={ProductDetailPage} />
      <Route path="*" Component={NotFoundPage} />
    </Routes>
    {
      !location.pathname.startsWith("/admin") ? <Footer /> : null
    }
    </>
  );
}

export default App;
