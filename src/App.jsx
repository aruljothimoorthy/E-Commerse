import "./App.css";
import Home from "./Home";
import Products from "./Products";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import { ProductProvider } from "./ProductContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ProductProvider>
      <Router basename="/E-Commerse">
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/productPage" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
