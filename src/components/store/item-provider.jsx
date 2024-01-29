import { useState } from "react";
import ItemContext from "./item-context";

const ItemProvider = (props) => {
  const [Item, setItem] = useState([]);
  let [quantity, setQuantity] = useState(0);

  const addItemHandler = (item) => {
    setItem([...Item, item]);
  };
  const addQuantityHandler = (newquantity, name) => {
    quantity = quantity + newquantity;
    console.log(quantity);
    setQuantity(quantity);
    Item.forEach((item) => {
      if (item.name === name) {
        item.quant = item.quant + newquantity;
      }
    });
    setItem([...Item]);
  };
  const subQuantityHandler = (newquantity, name) => {
    quantity = quantity - newquantity;

    setQuantity(quantity);
    Item.forEach((item) => {
      if (item.name === name) {
        item.quant = item.quant - newquantity;
      }
    });
    setItem([...Item]);
  };
  const calculateTotalAmount = () => {
    return Item.reduce((total, item) => {
      return total + item.quant * item.price;
    }, 0);
  };
  const itemContext = {
    item: Item,
    addItem: addItemHandler,
    subtractQuantity: subQuantityHandler,
    quantity: quantity,
    addQuantity: addQuantityHandler,
    TotalAmount: calculateTotalAmount,
  };
  return (
    <ItemContext.Provider value={itemContext}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
