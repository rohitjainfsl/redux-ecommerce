import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, addToCart, removeFromCart } from "./slice";
import "./App.css";
import Cart from "./Cart";
import Header from "./Header";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function App() {
  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.ecommerce;
  });

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  function trimmed(input) {
    const titleArr = input.split(" ");
    return titleArr.length > 8 ? titleArr.slice(0, 9).join(" ") : input;
  }

  function isInCart(input) {
    const isPresent = init.cart.find((cartItem) => {
      return cartItem.id === input;
    });
    return isPresent !== undefined ? true : false;
  }

  if (init.isLoading) {
    return <div className="loader">LOADING...</div>;
  } else {
    return (
      <>
        <Cart />
        <div className="content">
          <div className="products">
            {init.products.map((product, index) => {
              return (
                <div className="product" key={index}>
                  <img src={product.image} alt={product.image} />
                  <h3>{trimmed(product.title)}</h3>
                  <p>
                    <AttachMoneyIcon />
                    {product.price}
                  </p>

                  {isInCart(product.id) ? (
                    <button onClick={() => dispatch(removeFromCart(product))}>
                      Remove From Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="addToCart"
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
