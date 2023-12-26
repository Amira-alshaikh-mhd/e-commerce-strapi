import { useState, useEffect, useContext } from 'react'
import useFetch from '../hooks/useFetch'
import './Products.css'
import StoreContext from "../hooks/storeContext";




export default function Products() {

  const {filter} = useContext(StoreContext)

    const [products, setProducts] = useState([])
    const {data, loading, error} = useFetch(filter)

useEffect(() =>{
  data &&  setProducts(data)

},[data])



  return (
    <div className='allProducts'>
    {loading
        ? "loading..."
        : products.map(product => (
             <div className='product' key={product.id}>
              <h2 className='product-title'>{product.attributes.Title}</h2>
              <div className='product-price'>{product.attributes.Price}</div>

              <img className='product-image' src={import.meta.env.VITE_APP_URL + product.attributes.image.data.attributes.url} alt="image" />
              <div className='product-desc'>{product.attributes.Desc}</div>

             </div>
        ))
          }
      </div>
  )
}
