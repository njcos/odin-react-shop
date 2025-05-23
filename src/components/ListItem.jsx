import styles from "../css/ListItem.module.css";
import { useNavigate } from "react-router-dom";

export const ListItem = ({ title, image, price, id }) => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate("/" + route);
  };

  return (
    <div className={styles.card} onClick={() => handleClick(id)}>
      <img src={image} alt={title} className={styles.listImg} />
      <div className={styles.itemTextContainer}>
        <h4>{title}</h4>
        <h4>${price}</h4>
      </div>
    </div>
  );
};
