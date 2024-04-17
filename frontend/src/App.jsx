import { BrowserRouter, Route, Routes } from "react-router-dom";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
//images $ svgs
import bannermens from "./assets/bannermens.png";
import bannerwomans from "./assets/bannerwomens.png";
import bannerkids from "./assets/bannerkids.png";


export default function App() {
  return (
    <main className="test-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Category category={"men"} banner={bannermens} />} />
          <Route path="/womens" element={<Category category={"women"} banner={bannerwomans} />} />
          <Route path="/kids" element={<Category category={"kid"} banner={bannerkids} />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}