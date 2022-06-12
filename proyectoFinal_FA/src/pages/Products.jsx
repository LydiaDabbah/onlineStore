import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import { DataContext } from "../context/dataContext";
import getData from "../hooks/getData";
import useDataContext from "../hooks/useDataContext";
import useFetcher from "../hooks/useFetcher";



//style
import "../styles/productListStyle.css";

const Products = () => {

  //const { items, error, loading } = getData();
  const {
    data:items,
    error
  } = useFetcher('https://ecomerce-master.herokuapp.com/api/v1/item')
  

  if (error) return <p>error</p>;
  
 
  return (
  <ProductList items={items}/>
  );
};

export default Products;
