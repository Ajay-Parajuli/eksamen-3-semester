import React, { useState } from "react";
import { Cart } from "../Components/Cart";

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <div>
      <Cart onAdd={onAdd} cartItems={cartItems} />
    </div>
  );
};
