import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

export default function HomePage() {
  const [ productsList, setProductsList ] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProductsList(res.data.products));
  };

  console.log(productsList)
  return (
    <div className="grid grid-cols-5 gap-4">
      {productsList.map((product, index) => {
        return <ProductCard key={index} productData={product} />;
      })}
    </div>
  );
}
