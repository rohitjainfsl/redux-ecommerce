import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, addToCart } from "./slice";
import "./App.css";
import Cart from "./Cart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function App() {
  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.ecommerce;
  });

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log(init.cart);

  if (init.isLoading === false) {
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
                  <h3>{product.title}</h3>
                  <p>
                    <AttachMoneyIcon />
                    {product.price}
                  </p>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="addToCart"
                  >
                    Add To Cart
                  </button>
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
