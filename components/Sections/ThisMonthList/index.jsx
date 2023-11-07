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
        console.log("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="grid sm:hidden md:hidden xl:gap-x-0 w-fit xl:w-auto xl:flex gap-y-10 xl:gap-y-0 container justify-between mb-[4rem] sm:mb-[8.75rem]">
        {products.slice(0, 4).map((product) => (
          <ThisMonthItem key={product.id} product={product} />
        ))}
      </div>
      <div className="hidden xl:hidden sm:grid md:grid sm:grid-cols-2 md:grid-cols-2 mb-[4rem]">
        <div className="flex flex-col gap-y-10 items-center">
          {products.slice(0, 2).map((product) => (
            <ThisMonthItem key={product.id} product={product} />
          ))}
        </div>
        <div className="flex flex-col gap-y-10 items-center">
          {products.slice(2, 4).map((product) => (
            <ThisMonthItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThisMonthList;
