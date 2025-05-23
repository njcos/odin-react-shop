import { useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router";
import styles from "./css/ItemView.module.css";

export function ItemView() {
  const id = useParams();
  const { items, cartItems, setCartItems } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!items || !items[id.itemID - 1]) {
      navigate("/");
    }
  }, [items, id, navigate]);

  if (!items || !items[id.itemID - 1]) {
    return null;
  }

  const item = items[id.itemID - 1];
  const handleClick = () => {
    const newItem = { ...item, quantity: 1 };
    console.log(cartItems.length);
    if (cartItems.length !== 0) {
      const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
      if (itemInCart) {
        setCartItems(
          cartItems.map((prevItem) => {
            if (prevItem.id === item.id) {
              return { ...prevItem, quantity: prevItem.quantity + 1 };
            } else {
              return prevItem;
            }
          })
        );
      } else {
        setCartItems((cartItems) => [...cartItems, newItem]);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.itemViewContainer}>
        <img className={styles.heroImage} src={item.image} alt={item.title} />
        <div className={styles.itemTextWrapper}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <div className={styles.bottomText}>
            <h2>${item.price.toFixed(2)}</h2>
            <button className={styles.addToCart} onClick={handleClick}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
