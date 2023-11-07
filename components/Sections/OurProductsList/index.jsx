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
        console.log("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:block">
      <div className="xl:flex grid gap-y-10 xl:gap-y-0 w-fit xl:w-auto container justify-between pt-0 pb-[3.75rem]">
        {products.slice(0, 4).map((product) => (
          <OurProductsItem key={product.id} product={product} />
        ))}
      </div>
      <div className="xl:flex grid gap-y-10 xl:gap-y-0 w-fit xl:w-auto container justify-between pt-0 pb-[3.75rem]">
        {products.slice(0, 4).map((product) => (
          <OurProductsItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default OurProductsList;
