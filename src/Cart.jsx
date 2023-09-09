import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {toggleCart} from './slice'

function Cart() {
  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.ecommerce;
  });

  return (
    <div
      className="cart sticky"
      style={{right: init.showCart ? '0' : '-250px'}}
    >
        <div className="handle" onClick={() => dispatch(toggleCart())}>
            <h3>Cart</h3>
        </div>
      <ul>
        {init.cart.map((cartItem, index) => {
          return (
            <li className="cartItem" key={index}>
              <span className="left">
                <img src={cartItem.image} alt={cartItem.title} />
              </span>
              <span className="right">
                <h5>{cartItem.title}</h5>
                <p>
                  <AttachMoneyIcon /> {cartItem.price}
                </p>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
