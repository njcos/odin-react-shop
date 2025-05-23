import { useOutletContext } from "react-router";
import { CartItem } from "./components/CartItem";
import styles from "./css/Cart.module.css";

export function Cart() {
  const { cartItems, setCartItems } = useOutletContext();
  const total = () => {
    let totalCost = 0;
    cartItems.forEach((item) => {
      totalCost += item.price * item.quantity;
    });
    return <span> ${totalCost.toFixed(2)}</span>;
  };

  if (cartItems.length === 0) {
    return <div className={styles.noItems}>No items in cart.</div>;
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.cartItems}>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.title}
                image={item.image}
                title={item.title}
                price={item.price.toFixed(2)}
                quantity={item.quantity}
                item={item}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            );
          })}
          <div className={styles.totals}>
            <h2>Total: {total()} </h2>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
