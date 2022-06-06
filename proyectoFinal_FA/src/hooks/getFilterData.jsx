import React, { useEffect, useState } from 'react'
import { reqApi } from '../services'
import useFilterContext from './useFilterContext'


const getFilterData = () => {
    
const [items,SetItems]=useState([])
const[error,setError]=useState("")
const[loading,setLoading]=useState(true)
const {filterValue}=useFilterContext()

  useEffect(()=>{

    const Data=async()=>{

      try{
        const {data}= await reqApi()
        
        const filterData=data.filter((product) =>
          product.product_name.toLowerCase().includes(filterValue.toLowerCase())
        )
        SetItems(filterData)
        
      }catch(error){
        setError(error.message)
      }finally{
        setLoading(false)
      }
        
    }
    Data()
  },[filterValue])

  return {items,error,loading}
}



export default getFilterData