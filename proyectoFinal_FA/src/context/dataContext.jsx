import { createContext, useState } from 'react'

// nose esta usando ahorita
const DataContext = createContext(null)

const DataProvider = ({ children }) => {
  //const [filterValue, setFilterValue] = useState('')
  const [data,setData]=useState([])

  

  const initialValue = {
    //filterValue,
   // setFilterValue,
    setData
  }
  return (
     <DataContext.Provider value={initialValue}>
      {children}
    </DataContext.Provider>
  )
}

export {DataContext, DataProvider }