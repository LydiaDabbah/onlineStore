import { useContext } from 'react'
import { FilterContext } from '../pages/context/filterContext'


const useFilterContext = () => {
  const context = useContext(FilterContext)

  if (!context) throw new Error('No hay un contexto activo')

  return context 
}

export default useFilterContext