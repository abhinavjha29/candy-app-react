import { useContext } from "react";
import classes from "./Single-cart-item.module.css";
import ItemContext from "../../store/item-context";
const SingleCartItem = ({ name, price, quantity }) => {
  const itemContext = useContext(ItemContext);
  const addHandler = () => {
    itemContext.addQuantity(1, name);
  };
  const minusHandler = () => {
    itemContext.subtractQuantity(1, name);
  };
  console.log(quantity);
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={minusHandler}>−</button>
        <button onClick={addHandler}>+</button>
      </div>
    </li>
  );
};

export default SingleCartItem;
