import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage";
import  CartPage from "./pages/CartPage";
import  NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/login" Component={LoginPage} />
      <Route path="/" Component={HomePage} />
      <Route path="/cart" Component={CartPage} />
      <Route path="*" Component={NotFoundPage} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
