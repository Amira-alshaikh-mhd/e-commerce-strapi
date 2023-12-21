

import { useState, useEffect } from 'react'
import './App.css'
import {fetchApi} from "./hooks/fetchApi"
import useFetch from './hooks/useFetch'


function App() {

  const [products, setProducts] = useState([])
  const [categories,setCategories] = useState([])


const {data, loading, error} = useFetch("/products")

useEffect(() =>{
  data &&  console.log(data)
},[data])


   
//   const fetchProducts = async () => {

    
//     const res = await fetchApi.get("/products")
//     setProducts(res.data.data)
//   }

//  useEffect( () => {fetchProducts()},[])
  

//   const fetchCategories = async () => {

    
//     const res = await fetchApi.get("/categories")
//     setCategories(res.data.data)
//   }

 
//  useEffect( () => {fetchCategories()},[])
   

  return (
    <>
     <h1>hello</h1>
    </>
  )
}

export default App
