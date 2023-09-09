import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.ecommerce;
  });

  return (
    <nav>
      <ul>
        
        <li>
          <a href=""></a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
