import React, { useContext, useRef } from "react";
import ItemContext from "../store/item-context";

const CandyForm = () => {
  const itemContext = useContext(ItemContext);
  const nameElm = useRef();
  const descElm = useRef();
  const priceElm = useRef();
  const handleAddbtn = (e) => {
    e.preventDefault();
    const name = nameElm.current.value;
    const description = descElm.current.value;
    const price = priceElm.current.value;
    let quant = 0;
    let item = { name, description, price, quant };
    console.log(itemContext);
    itemContext.addItem({ ...item });
  };
  return (
    <div className="form-div">
      <form>
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="input1" className="form-label">
              Candy Name
            </label>
            <input
              ref={nameElm}
              type="text"
              className="form-control"
              placeholder="Please Put A name"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="input2" className="form-label">
              Description
            </label>
            <input
              ref={descElm}
              type="text"
              className="form-control"
              placeholder="Describe the Item"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="input3" className="form-label">
              Price
            </label>
            <input
              ref={priceElm}
              type="number"
              className="form-control"
              id="input3"
              placeholder="Enter per piece price"
            />
          </div>
          <div className="col-2 add">
            <button
              type="button"
              className="btn btn-success"
              onClick={(e) => handleAddbtn(e)}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CandyForm;
