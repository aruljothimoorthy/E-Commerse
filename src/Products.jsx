import React, { useState, useContext } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductContext from "./ProductContext";
import { useNavigate } from "react-router-dom";

function Products() {
  const { products, setSelectedProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleImageClick = (e) => {
    setSelectedProduct(e);
    navigate("/productPage");
  };
  const handleHome = () => {
    navigate("/cart");
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (search !== "") {
      const productExist = products.find(
        (e) => e.productName.toLowerCase() === search.toLowerCase()
      );
      if (productExist) {
        setSelectedProduct(productExist);
        navigate("/productPage");
      } else {
        setSearch("");
        alert("Product not found");
      }
    }
  };

  return (
    <div className="product-container">
      <div className="product-head">
        <div className="logo-container">
          <h2>E-Commerce</h2>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="search"
            value={search}
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
            onClick={handleSearch}
          />
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="cart-icon"
            id="cart-icon"
            onClick={handleHome}
          />
        </div>
      </div>

      {/* body */}
      <div className="product-body">
        <div className="cards">
          {products.map((e) => (
            <div className="product-card" key={e.UID}>
              <img
                src={e.productImage}
                alt="Loading..."
                width="200px"
                height="200px"
                onClick={() => handleImageClick(e)}
              />
              <h3>{e.productName}</h3>
              <h4>{e.title}</h4>
              <p>
                <b>Price:</b> ₹ {e.price}
              </p>
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="cart-icon"
                id="add-cart"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <div className="product-footer">
        <h4>Terms and conditions</h4>
      </div>
    </div>
  );
}

export default Products;
