import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/UI/header";
import CandyForm from "./components/UI/candyForm";

import ShowItems from "./components/UI/showItems";
import Cart from "./components/UI/Overlay/Item-cart";
import { useState } from "react";
import ItemProvider from "./components/store/item-provider";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <ItemProvider>
      <Header setSelectedPage={setSelectedPage}></Header>
      <main>
        {selectedPage == "cart" && (
          <Cart setSelectedPage={setSelectedPage}></Cart>
        )}

        <CandyForm></CandyForm>
        <ShowItems></ShowItems>
      </main>
    </ItemProvider>
  );
}

export default App;
