import getData from '../hooks/getData'

const Product = () => {

 
  const {items,error,loading}=getData('5fbc19a65a3f794d72471163')
console.log(items)
  if(error) return<p>error</p>
  if(loading)return <p>..loading</p>


  return (
    <div>{items[0].product_name}</div>
  )
}

export default Product