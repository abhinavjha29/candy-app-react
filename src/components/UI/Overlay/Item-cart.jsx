import Modal from "./Modal";

import classes from "./Item-cart.module.css";

import SingleCartItem from "./Single-cart-item";
import { useContext } from "react";
import ItemContext from "../../store/item-context";

const Cart = ({ setSelectedPage }) => {
  // const Item = [
  //   { name: "eclair", description: "chocolaty", price: 12 },
  //   { name: "mango bite", description: "khatta", price: 2 },
  // ];
  const itemContext = useContext(ItemContext);
  const Item = itemContext.item;
  console.log(itemContext, "provider");

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {Item.map((item) => (
        <SingleCartItem
          name={item.name}
          key={item.name}
          price={item.price}
          quantity={item.quant}
        ></SingleCartItem>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{itemContext.TotalAmount().toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => setSelectedPage("home")}
        >
          Close
        </button>
        <button
          className={classes.button}
          onClick={() => {
            console.log(".... orodering");
          }}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
