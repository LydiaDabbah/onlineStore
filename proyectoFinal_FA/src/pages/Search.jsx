import React, { useEffect } from "react";
import { useParams, useRoutes, useSearchParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import getData from "../hooks/getData";
import useFilterContext from "../hooks/useDataContext";


//style
import "../styles/productListStyle.css";

const Search = () => {

  const { items, error, loading } = getData();
  //const {filterValue}=useParams()
  const[searchParams,setSearchParams]=useSearchParams()

  const filterValue=searchParams.get('q')
  

  if (error) return <p>error</p>;
  if (loading) return <p>..loading</p>;

  const filterData=items.filter((product) =>
  product.product_name.toLowerCase().includes(filterValue.toLowerCase()))

  return (
  <ProductList items={filterData}/>
  );
}

export default Search