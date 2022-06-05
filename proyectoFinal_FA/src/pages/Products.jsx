import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import getFilterData from "../hooks/getFilterData";


//style
import "../styles/productListStyle.css";

const Products = () => {

  const { items, error, loading } = getFilterData();

  if (error) return <p>error</p>;
  if (loading) return <p>..loading</p>;

  return (
  <ProductList items={items}/>
  );
};

export default Products;
