import {useSearchParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import useFetcher from "../hooks/useFetcher";

//style
import "../styles/productListStyle.css";

const Search = () => {


  const[searchParams,setSearchParams]=useSearchParams()
  const filterValue=searchParams.get('q')

  const {
    data:items,
    error
  } = useFetcher(`https://ecomerce-master.herokuapp.com/api/v1/item`)
  
  if (error) return <p>error</p>;

  const filterData=items.filter((product) =>
  product.product_name.toLowerCase().includes(filterValue.toLowerCase()))

  return (
  <ProductList items={filterData}/>
  );
}

export default Search