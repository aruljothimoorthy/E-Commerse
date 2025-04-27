import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeProduct, updateQuantity } = useContext(ProductContext);
  const navigate = useNavigate();
  const handleHomeIconClick = () => {
    navigate("/product");
  };

  const removeRow = (UID) => {
    removeProduct(UID);
    alert("Confirm to delete this product from cart");
  };

  const handleIncrease = (UID) => {
    updateQuantity(UID, 1);
  };
  const handleDecrease = (UID) => {
    updateQuantity(UID, -1);
  };
  const handleBuyNowButton = () => {
    alert("Payment page is not ready so you can't buy this item");
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
          />
        </div>
      </div>
      {/* cart table section */}
      <div className="cart-section">
        <table>
          <thead>
            <td>Product</td>
            <td>Title</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Order</td>
            <td>Remove</td>
          </thead>
          <tbody>
            {cartItems.map((e) => (
              <tr key={e.UID}>
                <td>
                  <img src={e.productImage} alt="" width="50" />
                </td>
                <td>{e.title}</td>
                <td>₹ {e.price}</td>
                <td>
                  <button
                    id="quantity-button"
                    onClick={() => handleIncrease(e.UID)}
                  >
                    +
                  </button>
                  {e.quantity}
                  <button
                    id="quantity-button"
                    onClick={() => handleDecrease(e.UID)}
                  >
                    -
                  </button>
                </td>
                <td>₹ {e.price * e.quantity}</td>
                <td id="buyNow">
                  <button onClick={handleBuyNowButton}>Buy Now</button>
                </td>
                <td id="span">
                  <button onClick={() => removeRow(e.UID)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="product-footer">
        <h4>Terms and and conditions</h4>
      </div> */}
    </div>
  );
}


export default Cart;
