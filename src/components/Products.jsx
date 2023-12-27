import { useState, useEffect, useContext } from 'react'
import useFetch from '../hooks/useFetch'
import './Products.css'
import StoreContext from "../hooks/storeContext";
import { addToCart } from '../redux/cartReducer';
import { useDispatch } from 'react-redux';




export default function Products() {

  const {filter} = useContext(StoreContext)

    const [products, setProducts] = useState([])
    const {data, loading, error} = useFetch(filter)

    const dispatch = useDispatch()

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
              <button className='product-btn'
              onClick={ ()=>dispatch(addToCart({
                id: product.id,
                title: product.attributes.Title,
                Desc: product.attributes.Desc,
                price: product.attributes.Price,
                image: product.attributes.image.data.attributes.url,
              }))}
              >Add To Cart</button>

             </div>
        ))
          }
      </div>
  )
}
