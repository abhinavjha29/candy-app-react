import { createContext } from "react";

const ItemContext = createContext({
  Items: [],
  addItem: () => {},
  TotalAmount: () => {},
  quantity: 0,
  addQuantity: () => {},
  subtractQuantity: () => {},
});
export default ItemContext;
