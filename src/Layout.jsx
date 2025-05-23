import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { useState } from "react";

const Layout = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navigation cartItems={cartItems} />
      <Outlet context={{ items, setItems, cartItems, setCartItems }} />
    </>
  );
};
export { Layout };
