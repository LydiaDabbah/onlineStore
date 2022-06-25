import React from 'react'
import { Link } from "react-router-dom";

const ProductList = ({items}) => {
  return (
    <div className="App container-fluid ">
   
    <section className="row gy-4 mt-4 px-3 " style={{margin:'0 auto' , width:'80%'}} >
    <p className='m-0'>{items.length} results</p>
      {items.map((item) => (
          <div key={item._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Link
              to={`/product/${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card rounded text-dark border-0 cardHeigth ">
                <div className="imgHeight">
                
                  <img
                    className="card-img-top styleImage"
                    src="https://i.etsystatic.com/21013327/r/il/f664c2/2139030529/il_1588xN.2139030529_p9uk.jpg"//{item.image ||"https://i.etsystatic.com/21013327/r/il/f664c2/2139030529/il_1588xN.2139030529_p9uk.jpg"}
                    alt={item.product_name}
                  />
                  
                </div>

                <div className="card-body p-1  bodyHeight">
                  <p className="card-title text-trunc my-0  ">
                    <b>{item.product_name}</b>{" "}
                  </p>
                  <p className="card-textword-wrap font-italic text-trunc my-1 ">
                    {item.description}
                  </p>
                  <p>
                    <b>${item.price}.00</b>
                  </p>
                </div>
              </div>
            </Link>
          </div>
      ))}
    </section>
  </div>
  )
}

export default ProductList