import React, { useEffect, useState } from 'react'
import { reqApi } from '../services'
import useFilterContext from './useFilterContext'


const getData = (id='') => {
    
const [items,SetItems]=useState([])
  const[error,setError]=useState("")
  const[loading,setLoading]=useState(true)

  const {filterValue}=useFilterContext()



  useEffect(()=>{

    const Data=async()=>{

      try{
        const {data}= await reqApi(id)

        SetItems(data)
      }catch(error){
        setError(error.message)
      }finally{
        setLoading(false)
      }
        
    }
    Data()
  },[])

  return {items,error,loading}
}

export default getData