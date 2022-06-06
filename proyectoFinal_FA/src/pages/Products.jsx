import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import getData from "../hooks/getData";
import useFilterContext from "../hooks/useFilterContext";


//style
import "../styles/productListStyle.css";

const Products = () => {

  const { items, error, loading } = getData();
  const {filterValue}=useFilterContext()

  if (error) return <p>error</p>;
  if (loading) return <p>..loading</p>;

  const filterData=items.filter((product) =>
  product.product_name.toLowerCase().includes(filterValue.toLowerCase()))

  return (
  <ProductList items={filterData}/>
  );
};

export default Products;
