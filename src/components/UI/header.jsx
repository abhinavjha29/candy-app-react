import { useContext } from "react";
import ItemContext from "../store/item-context";

const Header = ({ setSelectedPage }) => {
  const itemContext = useContext(ItemContext);
  let quantity = itemContext.quantity;
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="header-text">Welcome To Candy Management App</li>
          </ul>

          <div className="text-end">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setSelectedPage("cart");
              }}
            >
              Cart <span className="badge text-bg-secondary">{quantity}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
