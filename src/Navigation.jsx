import { NavLink, Link } from "react-router-dom";
import styles from "./css/Navigation.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { SvgIcon } from "@mui/material";

export function Navigation(cartItems) {
  let items = 0;
  let itemsInCart = cartItems.cartItems.forEach((item) => {
    return (items += item.quantity);
  });

  return (
    <nav>
      <div className={styles.nav}>
        <div>
          <NavLink className={styles.store} to="/">
            The Odin Store
          </NavLink>
        </div>
        <div className={styles.navRight}>
          <NavLink className={styles.items} to="/">
            {" "}
            Items{" "}
          </NavLink>
          <NavLink className={styles.cart} to="/cart">
            <h5>{items}</h5>
            <SvgIcon
              fontSize="large"
              className={styles.cartIcon}
              component={ShoppingCartOutlinedIcon}
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
