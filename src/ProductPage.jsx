import React, { useContext } from "react";
import "./Home.css";
import ProductContext from "./ProductContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ProductPage() {
  const { selectedProduct, addtoCart } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    addtoCart(selectedProduct);
    navigate("/cart");
  };
  const handleIconClick = () => {
    navigate("/cart");
  };
  const handleHomeIconClick = () => {
    navigate("/product");
  };

  return (
    <div>
      <div className="product-head">
        <div className="logo-container">
          <h2>E-Commerce</h2>
        </div>
        <div className="search-container">
          {/* <input type="search" placeholder="search" className="search-input" /> */}
          <FontAwesomeIcon
            icon={faHome}
            className="home-icon"
            onClick={handleHomeIconClick}
          />
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="cart-icon"
            id="cart-icon"
            onClick={handleIconClick}
          />
        </div>
      </div>
      {/* body section */}

      <div className="productPage">
        {/* card-1 start */}
        <div className="productPage-card-1">
          <div>
            <img
              src={selectedProduct.productImage}
              alt="Loading..."
              width="138px"
              id="img1"
            />
          </div>
          <div>
            <img
              src={selectedProduct.productImage}
              alt="Loading..."
              width="138px"
              id="img2"
            />
          </div>
          <div>
            <img
              src={selectedProduct.productImage}
              alt="Loading..."
              width="138px"
              id="img3"
            />
          </div>
          <div>
            <img
              src={selectedProduct.productImage}
              alt="Loading..."
              width="138px"
              id="img4"
            />
          </div>
        </div>

        {/* card -2m start */}
        <div className="productPage-card-2">
          <img
            src={selectedProduct.productImage}
            alt="Loading..."
            width="601px"
          />
        </div>

        {/* card-3 start */}
        <div className="productPage-card-3">
          <h1>
            {selectedProduct.productName} | {selectedProduct.title}
          </h1>
          <p id="Ratings">
            <span id="star">★</span>
            <span id="star">★</span>
            <span id="star">★</span>
            <span id="star">★</span>
            <span id="star">☆</span>
            <span id="RatingNumber">(144)</span>
          </p>
          <h3>
            <span id="deletedprice">
              <del>₹1100</del>
            </span>{" "}
            <span id="price"> ₹ {selectedProduct.price}</span>
          </h3>
          <p id="productPage-description">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quod animi at suscipit non mollitia. */}
            {selectedProduct.description}
          </p>
          <h4>Select Size</h4>
          <div className="Size-box">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>
          <p id="paragraph">
            <b>Categoty: </b>Mens Collections
          </p>
          <p id="paragraph">
            <b>Tags: </b>Modern, Latest
          </p>
          <button id="Addtocart" onClick={handleButtonClick}>
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Footer section */}
      <div className="product-footer">
        <h4>Terms and conditions</h4>
      </div>
    </div>
  );
}

export default ProductPage;
