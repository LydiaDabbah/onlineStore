import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import useFetcher from "../hooks/useFetcher";

//style
import "../styles/productListStyle.css";

const Products = () => {

  const { data: items, error } = useFetcher(
    "https://ecomerce-master.herokuapp.com/api/v1/item"
  );

  if (error) return <p>error</p>;

  return <ProductList items={items} />;
};

export default Products;
