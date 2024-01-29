import { useContext } from "react";
import ItemContext from "../store/item-context";

const SingleItem = ({ name, description, price }) => {
  const itemContext = useContext(ItemContext);
  const handleBuy1 = (e) => {
    //let quant = itemContext.quantity + 1;
    console.log(name);
    itemContext.addQuantity(1, name);
  };
  const handleBuy2 = () => {
    itemContext.addQuantity(2, name);
  };
  const handleBuy3 = () => {
    itemContext.addQuantity(3, name);
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-2">{name}</div>
        <div className="col-md-auto">{description}</div>
        <div className="col-sm-2">{price}</div>
        <div className="col-md-auto">
          <button
            type="button"
            className="btn btn-danger buy"
            onClick={(e) => handleBuy1(e)}
          >
            Buy 1
          </button>
        </div>

        <div className="col-md-auto">
          <button
            type="button"
            className="btn btn-warning buy"
            onClick={handleBuy2}
          >
            Buy 2
          </button>
        </div>
        <div className="col-md-auto">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleBuy3}
          >
            Buy 3
          </button>
        </div>
      </div>
    </>
  );
};
export default SingleItem;
