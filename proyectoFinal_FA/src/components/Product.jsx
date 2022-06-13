import { useParams } from 'react-router-dom'
import getData from '../hooks/getData'
import '../styles/productStyle.css'
//https://startbootstrap.com/template/shop-item

const Product = () => {

const {id}=useParams()
   
 
  const {items,error,loading}=getData(id)

  if(error) return<p>error</p>
  if(loading)return <p>..loading</p>


  return (
  
        <div className=' container-fluid flex   '>
          <div className='row gx-4 mt-4 px-2 py-3 align-items-center 'style={{margin:'0 auto' , width:'80%'}}>
            <div className='col-md-6'>
              <img className=' img-responsive card-img-top mb-5 mb-md-0' src="https://i.etsystatic.com/21013327/r/il/f664c2/2139030529/il_1588xN.2139030529_p9uk.jpg" alt=".." />
            </div>
            <div className='col-md-6'>
            <p className=' small mb-1'> SKU: {items.sku}</p>
            <h3 className='text-trunc-2 fw-bolder'>{items.product_name}</h3>
            <div className=' fs-5 mb-5'>
              <span className='small text-decoration-line-through'>${items.price}.00</span>
              <span className='small text-danger'> ${items.price}.00</span>
            </div>
            <p className='text-trunc-4 small'>{items.description}</p>
            <div className='d-flex'>
              <input id='inputQuantity' placeholder='#' className='form-control inputsm text-center me-3' type="num"  style={{maxWidth:'3rem'}}/>
              <button className='btn btn-outline-dark flex-shrink-0' type='button'><i className=' small bi-cart-fill me-1'> Add to Cart</i></button>
              
            </div>
            
            </div>

          </div>
        </div>

       
  )
}

export default Product