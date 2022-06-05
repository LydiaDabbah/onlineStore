import { createContext, useState } from 'react'


const FilterContext = createContext(null)

const ContextProvider = ({ children }) => {
  const [filterValue, setFilterValue] = useState('')

  const initialValue = {
    filterValue,
    setFilterValue
  }
  return (
    <FilterContext.Provider value={initialValue}>
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, ContextProvider }