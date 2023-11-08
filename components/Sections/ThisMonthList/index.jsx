import React, { useEffect, useState } from "react";
import axios from "axios";

import ThisMonthItem from "../ThisMonthItem";

function ThisMonthList() {
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
    <div>
      <div className="container mb-[4rem] grid w-fit justify-between gap-y-10 sm:mb-[8.75rem] sm:hidden md:hidden xl:flex xl:w-auto xl:gap-x-0 xl:gap-y-0">
        {products.slice(0, 4).map((product) => (
          <ThisMonthItem key={product.id} product={product} />
        ))}
      </div>
      <div className="mb-[4rem] hidden sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 xl:hidden">
        <div className="flex flex-col items-center gap-y-10">
          {products.slice(0, 2).map((product) => (
            <ThisMonthItem key={product.id} product={product} />
          ))}
        </div>
        <div className="flex flex-col items-center gap-y-10">
          {products.slice(2, 4).map((product) => (
            <ThisMonthItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThisMonthList;
