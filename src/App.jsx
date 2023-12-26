import { useState, useEffect } from "react";
import "./App.css";
import Products from "./components/Products";
import Categories from "./components/Categories";
import StoreContext from "./hooks/storeContext";

function App() {
  const [filter, setFilter] = useState("/products?populate=*");
  const [selectedCategories, setSelectedCategories] = useState([])


  return (
    <>
      <StoreContext.Provider value={{filter, setFilter, selectedCategories, setSelectedCategories }}>
        <Categories />

        <Products />
      </StoreContext.Provider>
    </>
  );
}

export default App;
