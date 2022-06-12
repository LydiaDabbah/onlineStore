import { useContext } from 'react'
import { DataContext } from '../context/dataContext'



const useDataContext = () => {
  const context = useContext(DataContext)

  if (!context) throw new Error('No hay un contexto activo')

  return context 
}

export default useDataContext