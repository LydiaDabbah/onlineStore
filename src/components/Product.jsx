import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useFetcher from "../hooks/useFetcher";
import "../styles/productStyle.css";
//https://startbootstrap.com/template/shop-item

const Product = () => {
  const { id } = useParams();

  const { data: items, error } = useFetcher(
    `https://ecomerce-master.herokuapp.com/api/v1/item/${id}`
  );

  if (error) return <p>error</p>;


  const {
    authorized: user,
  } = useAuthContext();

  const navigate=useNavigate()


  return (
    <div className=" container-fluid flex   ">
      <div
        className="row gx-4 mt-4 px-2 py-3 align-items-center "
        style={{ margin: "0 auto", width: "80%" }}
      >
        <div className="col-md-6">
          <img
            className=" img-responsive card-img-top mb-5 mb-md-0"
            src= {items.image ||"https://i.etsystatic.com/21013327/r/il/f664c2/2139030529/il_1588xN.2139030529_p9uk.jpg"}
            alt=".."
          />
        </div>
        <div className="col-md-6">
          <p className=" small mb-1"> SKU: {items.sku}</p>
          <h3 className="text-trunc-2 fw-bolder">{items.product_name}</h3>
          <div className=" fs-5 mb-5">
            <span className="small text-decoration-line-through">
              ${items.price}.00
            </span>
            <span className="small text-danger"> ${items.price}.00</span>
          </div>
          <p className="text-trunc-4 small">{items.description}</p>
          <form className="d-flex" onSubmit={()=>navigate('/cart')}>
          
            <input
              id="inputQuantity"
              placeholder="#"
              className="form-control inputsm text-center me-3"
              type="num"
              style={{ maxWidth: "3rem" }}
            />
            <button
              className="btn btn-outline-dark flex-shrink-0"
              type="submit"
            >
              <i className=" small bi-cart-fill me-1"> Add to Cart</i>
            </button>
            </form>
       
        </div>
      </div>
    </div>
  );
};

export default Product;
