import styles from "../css/CartItem.module.css";
import { useNavigate } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { SvgIcon } from "@mui/material";

export const CartItem = ({
  title,
  image,
  price,
  quantity,
  item,
  cartItems,
  setCartItems,
}) => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate("/" + route);
  };

  const handleIncrement = () => {
    setCartItems(
      cartItems.map((prevItem) => {
        if (prevItem === item) {
          return { ...prevItem, quantity: (prevItem.quantity += 1) };
        } else {
          return prevItem;
        }
      })
    );
  };

  const handleDecrement = () => {
    setCartItems(
      cartItems.map((prevItem) => {
        if (prevItem === item) {
          return { ...prevItem, quantity: (prevItem.quantity -= 1) };
        } else {
          return prevItem;
        }
      })
    );
    if (item.quantity === 0) {
      setCartItems(cartItems.filter((items) => items !== item));
    }
  };

  const handleDelete = () => {
    setCartItems(cartItems.filter((items) => items !== item));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.listImg} />
        <div className={styles.itemTextContainer}>
          <h4>{title}</h4>
          <h4>${price}</h4>
          <div className={styles.quantity}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDecrement();
              }}
            >
              -
            </button>
            <h4>{quantity}</h4>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleIncrement();
              }}
            >
              +
            </button>
            <button onClick={() => handleDelete()}>
              <SvgIcon
                fontSize="small"
                className={styles.cartIcon}
                component={DeleteOutlineOutlinedIcon}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
