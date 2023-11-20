/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import FillUpArrow from "@/components/Buttons/FillUpArrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchResultsItems from "@/components/Sections/SearchResultsItems";
import TopHeader from "@/components/TopHeader";

export async function getServerSideProps(context) {
  const Category = context.query.category;
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${Category}`,
    );
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
function CategoryResults({ products, keyword }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      <Head>
        <title>{products[0].category} Category</title>
      </Head>
      <main>
        <TopHeader />
        <div className={isScrolled ? "fixed -top-[23px] z-50 w-full" : ""}>
          <Header />
        </div>
        <div className="mt-[5.9375rem]">
          <div className="container py-0">
            <div className="py-20 text-2xl font-medium">
              Browse By
              <span className="font-semibold capitalize text-secondary-2">
                {" "}
                &quot;{products[0].category}&quot; :
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
          <Footer />
        </div>
      </main>
    </>
  );
}

CategoryResults.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  keyword: PropTypes.string.isRequired,
};

export default CategoryResults;