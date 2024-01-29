import { useContext } from "react";
import SingleItem from "./singleItem";
import ItemContext from "../store/item-context";
import ShowItem from "./showItem";

const ShowItems = () => {
  const itemContext = useContext(ItemContext);
  // const items = [
  //   { name: "eclair", description: "chocolaty", price: 12 },
  //   { name: "mango bite", description: "khatta", price: 2 },
  // ];
  console.log(itemContext);
  const items = itemContext.item;

  return (
    <>
      <h2>Candy Detail</h2>
      {items.length > 0 && <ShowItem></ShowItem>}
    </>
  );
};

export default ShowItems;
