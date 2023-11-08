import React, { useEffect, useState } from "react";
import axios from "axios";

import OurProductsItem from "../OurProductsItem";

function OurProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=4",
        );
        setProducts(response.data);
      } catch (error) {
        // console.log("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:block">
      <div className="container grid w-fit justify-between gap-y-10 pb-[3.75rem] pt-0 xl:flex xl:w-auto xl:gap-y-0">
        {products.slice(0, 4).map((product) => (
          <OurProductsItem key={product.id} product={product} />
        ))}
      </div>
      <div className="container grid w-fit justify-between gap-y-10 pb-[3.75rem] pt-0 xl:flex xl:w-auto xl:gap-y-0">
        {products.slice(0, 4).map((product) => (
          <OurProductsItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default OurProductsList;
