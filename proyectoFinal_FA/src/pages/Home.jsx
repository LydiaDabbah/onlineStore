import React, { useEffect } from 'react'
import getData from '../hooks/getData'



const Home = () => {

    const {items,error,loading}=getData()

  if(error) return<p>error</p>
  if(loading)return <p>..loading</p>

  return (
   <div>
     
    { items.map((item)=>(
       
       <p key={item._id}>{item.product_name}</p>
       
     ))}
   
   </div>
  )
}

export default Home