import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'


export default function Categories() {

  const [categories,setCategories] = useState([])
  const {data, loading, error} = useFetch("/categories?populate=*")

  useEffect(() =>{
    data &&  setCategories(data)
    console.log(data)
  },[data])


  return (
    <div className='flex'>
       {loading 
        ? "loading..."
        : categories.map(category =>(
            <div key={category.id}>
                <h1>{category.attributes.title}</h1>
                <div>{category.attributes.description}</div>
              <img src={import.meta.env.VITE_APP_URL + category.attributes.image.data.attributes.url} alt="image" />



            </div>
        ))

       }

    </div>
  )
}
