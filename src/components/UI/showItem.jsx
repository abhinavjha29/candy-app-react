import { useContext } from "react";
import ItemContext from "../store/item-context";
import SingleItem from "./singleItem";

const ShowItem = () => {
  const itemContext = useContext(ItemContext);
  const items = itemContext.item;
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.name}>
            <SingleItem
              name={item.name}
              description={item.description}
              price={item.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowItem;
