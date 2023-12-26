import { useState } from "react";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const [cartList, setCartList] = useState(false);

  const showCartList = () => {
      cartList ? setCartList(false) : setCartList(true);
  };

  return (
    <div className="cart">
      <div className="cart-icon" onClick={showCartList}>
        <FaShoppingCart />
      </div>
      <div className="cart-badge">5</div>

      {cartList ? (
        <ul className="cart-list">
          <li className="cart-item">
            <img
              src="http://localhost:1337/uploads/men_01_2cd5ae4273.jpg"
              alt=""
              className="cart-item-image"
            />
            <span className="cart-item-title">classic spring</span>
            <span className="cart-item-price">120$</span>
          </li>

          <li className="cart-item">
            <img
              src="http://localhost:1337/uploads/women_02_1af34ae0e0.jpg"
              alt=""
              className="cart-item-image"
            />
            <span className="cart-item-title">Classic Dress</span>
            <span className="cart-item-price">45$</span>
          </li>

          <li className="cart-item">
            <img
              src="http://localhost:1337/uploads/kid_01_0ee403960d.jpg"
              alt=""
              className="cart-item-image"
            />
            <span className="cart-item-title">school collection</span>
            <span className="cart-item-price">90$</span>
          </li>

          <li className="cart-item">
            <img
              src="http://localhost:1337/uploads/kid_03_04473f9806.jpg"
              alt=""
              className="cart-item-image"
            />
            <span className="cart-item-title">classic</span>
            <span className="cart-item-price">50$</span>
          </li>
        </ul>
      ) 
      : ("")
      }
    </div>
  );
}
