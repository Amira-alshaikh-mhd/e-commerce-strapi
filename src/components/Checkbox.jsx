import "./Checkbox.css";
import { useContext, useEffect, useState } from "react";
import StoreContext from "../hooks/storeContext";
import qs from "qs";


export default function Checkbox({ category }) {
  const { setFilter, selectedCategories, setSelectedCategories } = useContext(StoreContext);


useEffect(() => {
  const query = qs.stringify({
    filters: {
      categories: {
        id:{
          $in: selectedCategories
        }
      }
    }
  })
  
  setFilter(import.meta.env.VITE_API_URL + "/products?populate=*&" + query)


},[selectedCategories])



  const handleFilterCategory = (e) =>{

const selectedID = e.target.dataset.category
const isChecked = e.target.checked

setSelectedCategories(selectedCategories => {
  if(isChecked) return [...selectedCategories, selectedID]
  return selectedCategories.filter(id => id != selectedID)
})


  }

  return (
    <div className="flex">
      <label className="toggler-wrapper style-9">
        <input
         type="checkbox" 
         data-category={category.id}
         onChange={handleFilterCategory} />

        <div className="toggler-slider">
          <div className="toggler-knob"></div>
        </div>
        <div className="badge">{category.attributes.title}</div>
      </label>
    </div>
  );
}
