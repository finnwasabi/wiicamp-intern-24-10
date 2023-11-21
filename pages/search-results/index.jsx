/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import FillUpArrow from "@/components/Buttons/FillUpArrow";
import SearchResultsItems from "@/components/Sections/SearchResultsItems";

export async function getServerSideProps(context) {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;
    const keyword = context.query.keyword || "";

    return {
      props: {
        products,
        keyword,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        products: [],
        keyword: "",
      },
    };
  }
}
function SearchResults({ products, keyword }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const router = useRouter();
  useEffect(() => {
    if (products && products.length > 0) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase()),
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [keyword, products, router]);

  return (
    <main>
      <Head>
        <title>{keyword}&apos;s Search Results</title>
      </Head>
      <div className="container py-0">
        <div className="py-20 text-2xl font-medium">
          Search Results For
          <span className="font-semibold text-secondary-2">
            {" "}
            &quot;{keyword}&quot; :
          </span>
        </div>
        {filteredProducts.length > 0 ? (
          <span className="mb-[8.75rem] grid w-full grid-cols-1 flex-row place-items-center justify-between gap-x-[1.875rem] gap-y-[3.75rem] pt-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <SearchResultsItems key={product.id} product={product} />
            ))}
          </span>
        ) : (
          <div className="mb-[8.75rem] flex items-center justify-center text-xl text-text-1">
            No products found
          </div>
        )}
      </div>
      <FillUpArrow />
    </main>
  );
}

SearchResults.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  keyword: PropTypes.string,
};

SearchResults.defaultProps = {
  keyword: "",
};

export default SearchResults;
