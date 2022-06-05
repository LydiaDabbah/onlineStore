import { useParams } from 'react-router-dom'
import getData from '../hooks/getData'


const Product = () => {

const {id}=useParams()
    console.log(id)
 
  const {items,error,loading}=getData(id)
console.log(items)
  if(error) return<p>error</p>
  if(loading)return <p>..loading</p>


  return (
    <div>
        <p>{items.product_name}</p>
        <img src={items.image} alt="" />
        </div>
  )
}

export default Product