import { useEffect } from "react";
import { useOutletContext } from "react-router";
import { ListItem } from "./components/ListItem";
import styles from "./css/Items.module.css";

export function Items() {
  const { items, setItems } = useOutletContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [setItems]);

  return (
    <>
      <div className={styles.itemGrid}>
        {items.map((item) => {
          return (
            <ListItem
              key={item.title}
              title={item.title}
              image={item.image}
              price={item.price.toFixed(2)}
              id={item.id}
            />
          );
        })}
      </div>
    </>
  );
}
