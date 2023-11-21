import React, { useRef, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import clsx from "clsx";
import { CircleDollarSign, Heart, Minus, Plus, XCircle } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import ProductImgSlider from "@/components/Sections/ProductImgSlider";
import RelatedItem from "@/components/Sections/RelatedItem";

import useAuthStore from "@/stores/authStore";
import useWishStore from "@/stores/wishStore";
import formatter from "@/utils/formatter";

import s from "./product.module.scss";

const renderStars = (rating) => {
  const starsArray = [];
  const filledStars = Math.floor(rating);
  for (let i = 0; i < filledStars; i += 1) {
    starsArray.push(
      <svg
        key={`star-${i}`}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="#FFAD33"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" />
      </svg>,
    );
  }
  for (let i = filledStars; i < 5; i += 1) {
    starsArray.push(
      <svg
        key={`star-${i}`}
        width="20"
        height="20"
        viewBox="0 0 16 20"
        fill="#D1D5DB"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" />
      </svg>,
    );
  }
  return <div style={{ display: "flex" }}>{starsArray}</div>;
};
export async function getServerSideProps(context) {
  const productId = context.query.id;
  const productCategory = context.query.category;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const res2 = await fetch(
      `https://fakestoreapi.com/products/category/${productCategory}`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const product = await res.json();
    const categories = await res2.json();

    return {
      props: {
        product,
        categories,
      },
    };
  } catch (error) {
    // console.error("Error fetching product data:", error);
    return {
      notFound: true,
    };
  }
}
function Product({ product, categories }) {
  const [quantity, setQuantity] = useState(1);
  const { isAuthenticated } = useAuthStore();
  const wishStore = useWishStore();
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImageClick = () => {
    openModal();
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const existingWishItem = wishStore.items.find(
    (item) => item.productId === product.id,
  );
  const handleAddToWish = () => {
    if (existingWishItem) {
      wishStore.removeFromWish(product.id);
    } else {
      wishStore.addToWish({
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      });
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value.trim();
    if (newValue === "" || (newValue >= 1 && !Number.isNaN(newValue))) {
      setQuantity(newValue === "" ? "" : parseInt(newValue, 10));
    }
  };

  return (
    <main>
      <Head>
        <title>Product</title>
      </Head>
      <div className="container">
        <div className="flex gap-3 py-20">
          <Link href="/" className="text-text-1">
            Home
          </Link>
          <span className="text-text-1">/</span>
          <span className="capitalize text-text-1">{product.category}</span>
          <span className="text-text-1">/</span>
          <span className="cursor-default">{product.title}</span>
        </div>
        <div className="mb-[8.75rem] flex flex-col justify-between gap-y-5 sm:gap-y-10 xl:flex-row xl:gap-y-0 ">
          <div className="flex justify-center gap-x-[1.875rem]">
            <span className="hidden w-[10.625rem] flex-col gap-y-4 sm:flex">
              <p className="h-[8.625rem] cursor-pointer rounded border-2 transition-all hover:h-[10rem]">
                <Image
                  onClick={handleImageClick}
                  src={product.image}
                  width={500}
                  height={600}
                  alt="Picture of the author"
                  className="h-full w-full object-contain"
                />
              </p>
              <p className="h-[8.625rem] cursor-pointer rounded border-2 transition-all hover:h-[10rem]">
                <Image
                  onClick={handleImageClick}
                  src={product.image}
                  width={500}
                  height={600}
                  alt="Picture of the author"
                  className="h-full w-full object-contain"
                />
              </p>
              <p className="h-[8.625rem] cursor-pointer rounded border-2 transition-all hover:h-[10rem]">
                <Image
                  onClick={handleImageClick}
                  src={product.image}
                  width={500}
                  height={600}
                  alt="Picture of the author"
                  className="h-full w-full object-contain"
                />
              </p>
              <p className="h-[8.625rem] cursor-pointer rounded border-2 transition-all hover:h-[10rem]">
                <Image
                  onClick={handleImageClick}
                  src={product.image}
                  width={500}
                  height={600}
                  alt="Picture of the author"
                  className="h-full w-full object-contain"
                />
              </p>
            </span>
            <span className="z-40 flex max-h-[37.5rem] max-w-[31.25rem] items-center justify-center rounded border-2">
              <Image
                onClick={handleImageClick}
                src={product.image}
                width={500}
                height={600}
                alt="Picture of the author"
                className="sm:hidden"
              />
              <ReactImageMagnify
                className="hidden sm:block"
                {...{
                  smallImage: {
                    alt: "product",
                    src: product.image,
                    height: 595,
                    width: 495,
                  },
                  largeImage: {
                    src: product.image,
                    width: 2000,
                    height: 2400,
                  },
                  isEnlargedImagePortalEnabledForTouch: true,
                  enlargedImageContainerStyle: {
                    backgroundColor: "white",
                  },
                  enlargedImageStyle: {
                    width: "auto",
                    height: "auto",
                    maxWidth: "400%",
                    objectFit: "contain",
                  },
                  imageStyle: {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  },
                  isHintEnabled: true,
                }}
              />
            </span>
          </div>
          <span className="flex w-full gap-x-2 sm:hidden">
            <p className="cursor-pointer rounded border-2">
              <Image
                onClick={handleImageClick}
                src={product.image}
                width={500}
                height={600}
                alt="Picture of the author"
                className="h-full w-full object-contain"
              />
            </p>
            <p className="cursor-pointer rounded border-2">
              <Image
                onClick={handleImageClick}
                src={product.image}
                width={500}
                height={600}
                alt="Picture of the author"
                className="h-full w-full object-contain"
              />
            </p>
            <p className="cursor-pointer rounded border-2">
              <Image
                onClick={handleImageClick}
                src={product.image}
                width={500}
                height={600}
                alt="Picture of the author"
                className="h-full w-full object-contain"
              />
            </p>
            <p className="cursor-pointer rounded border-2">
              <Image
                onClick={handleImageClick}
                src={product.image}
                width={500}
                height={600}
                alt="Picture of the author"
                className="h-full w-full object-contain"
              />
            </p>
          </span>
          <div className="flex flex-col gap-y-6 xl:max-w-[25rem]">
            <div className="flex flex-col justify-start gap-y-4">
              <span className="text-2xl font-semibold">{product.title}</span>
              <span className="flex items-center">
                <p className="mr-2 text-sm">
                  {renderStars(product.rating.rate)}
                </p>
                <p className="border-r border-text-1 pr-4 text-sm text-text-1">
                  ({product.rating.count} reviews)
                </p>
                <p className="ml-4 text-sm text-button-1">In Stock</p>
              </span>
              <span className="text-2xl leading-[1.5rem]">
                {formatter(product.price)}
              </span>
            </div>
            <span className="text-sm">{product.description}</span>
            <span className="border-b border-text-1" />
            <div className="flex flex-col justify-between gap-y-6 lg:flex-row xl:flex-col">
              <div className="flex flex-col gap-x-8 gap-y-6 sm:flex-row sm:gap-y-0 md:justify-between xl:flex-col xl:gap-y-6">
                <span className="flex items-center gap-x-6 xl:h-[1.5rem]">
                  <p className="text-xl leading-[1.25rem]">Colours:</p>
                  <p className="flex items-center gap-x-2">
                    <input
                      className="h-[1.25rem] w-[1.25rem] cursor-pointer appearance-none rounded-full bg-[#A0BCE0] transition-all checked:border-2 checked:border-black checked:p-1 hover:mr-1 hover:h-[1.5rem] hover:w-[1.5rem]"
                      type="radio"
                      name="colour"
                    />
                    <input
                      className="h-[1.25rem] w-[1.25rem] cursor-pointer appearance-none rounded-full bg-[#E07575] transition-all checked:border-2 checked:border-black checked:p-1 hover:h-[1.5rem] hover:w-[1.5rem]"
                      type="radio"
                      name="colour"
                    />
                  </p>
                </span>
                <span className="flex min-h-[2.5rem] items-center gap-x-6">
                  <p className="text-xl leading-[1.25rem]">Size:</p>
                  <span className="flex items-center gap-x-4">
                    <button
                      type="button"
                      className="h-[2rem] w-[2rem] rounded border-[0.0625rem] border-black border-opacity-50 text-center text-sm font-medium transition-all hover:h-[2.5rem] hover:w-[2.5rem] focus:border-0 focus:bg-secondary-2 focus:text-white"
                    >
                      XS
                    </button>
                    <button
                      type="button"
                      className="h-[2rem] w-[2rem] rounded border-[0.0625rem] border-black border-opacity-50 text-center text-sm font-medium transition-all hover:h-[2.5rem] hover:w-[2.5rem] focus:border-0 focus:bg-secondary-2 focus:text-white"
                    >
                      S
                    </button>
                    <button
                      type="button"
                      className="h-[2rem] w-[2rem] rounded border-[0.0625rem] border-black border-opacity-50 text-center text-sm font-medium transition-all hover:h-[2.5rem] hover:w-[2.5rem] focus:border-0 focus:bg-secondary-2 focus:text-white"
                    >
                      M
                    </button>
                    <button
                      type="button"
                      className="h-[2rem] w-[2rem] rounded border-[0.0625rem] border-black border-opacity-50 text-center text-sm font-medium transition-all hover:h-[2.5rem] hover:w-[2.5rem] focus:border-0 focus:bg-secondary-2 focus:text-white"
                    >
                      L
                    </button>
                    <button
                      type="button"
                      className="h-[2rem] w-[2rem] rounded border-[0.0625rem] border-black border-opacity-50 text-center text-sm font-medium transition-all hover:h-[2.5rem] hover:w-[2.5rem] focus:border-0 focus:bg-secondary-2 focus:text-white"
                    >
                      XL
                    </button>
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-4">
                  <div className="flex">
                    <span className="group">
                      <button
                        onClick={handleDecrement}
                        type="button"
                        className="flex h-[2.75rem] w-[2.5rem] items-center justify-center rounded-l border border-black border-opacity-50 transition-all group-active:border-0 group-active:bg-secondary-2"
                      >
                        <Minus className="group-active:stroke-white" />
                      </button>
                    </span>
                    <input
                      type="number"
                      className={clsx(
                        s.RemoveArrow,
                        "h-[2.75rem] w-[5rem] border-b border-t border-black border-opacity-50 text-center text-xl font-semibold",
                      )}
                      onChange={handleInputChange}
                      value={quantity}
                    />
                    <span className="group">
                      <button
                        onClick={handleIncrement}
                        type="button"
                        className="flex h-[2.75rem] w-[2.5rem] items-center justify-center rounded-r border border-black border-opacity-50 transition-all group-active:border-0 group-active:bg-secondary-2"
                      >
                        <Plus className="group-active:stroke-white" />
                      </button>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="flex h-[2.75rem] w-full items-center rounded bg-button-2 px-[3rem] py-[0.625rem] font-medium text-white transition-all hover:bg-hover-button-0"
                  >
                    <p className="hidden sm:block">Buy now</p>
                    <CircleDollarSign size={32} className="sm:hidden" />
                  </button>
                </div>
                {isAuthenticated ? (
                  <div>
                    {existingWishItem ? (
                      <span className="group">
                        <button
                          type="button"
                          className="flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded bg-secondary-2 lg:ml-4 xl:ml-auto xl:h-[2.5rem] xl:w-[2.5rem]"
                          onClick={handleAddToWish}
                        >
                          <Heart
                            strokeWidth={0}
                            fill="white"
                            className="w-[2.125rem] transition-all group-hover:h-[2.125rem]"
                          />
                        </button>
                      </span>
                    ) : (
                      <span className="group">
                        <button
                          type="button"
                          className="flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded border border-black border-opacity-50 lg:ml-4 lg:h-[2.75rem] lg:w-[2.75rem] xl:ml-auto xl:h-[2.5rem] xl:w-[2.5rem]"
                          onClick={handleAddToWish}
                        >
                          <Heart
                            strokeWidth={1.5}
                            className="w-[2.125rem] transition-all group-hover:h-[2.125rem]"
                          />
                        </button>
                      </span>
                    )}
                  </div>
                ) : (
                  <Link href="/please">
                    <span className="group">
                      <button
                        type="button"
                        className=" flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded border border-black border-opacity-50"
                      >
                        <Heart
                          strokeWidth={1.5}
                          className="w-[2.125rem] transition-all group-hover:h-[2.125rem]"
                        />
                      </button>
                    </span>
                  </Link>
                )}
              </div>
            </div>
            <div className="relative mt-4 flex w-full flex-col rounded border border-black border-opacity-50 py-6 sm:flex-row sm:p-6 md:justify-between xl:flex-col xl:p-0 xl:py-6">
              <div className="group flex cursor-pointer items-center gap-x-4 pl-4 font-semibold leading-[1.125rem] sm:pl-0 xl:pl-4">
                <Image
                  src="/icon-delivery.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
                <span className="flex flex-col gap-y-2">
                  <p>Free Delivery</p>
                  <p className="text-xs group-hover:underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </span>
              </div>
              <span className="my-4 block border-b border-black border-opacity-50 sm:hidden xl:block" />
              <span className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 border-l border-black border-opacity-50 sm:block xl:hidden" />
              <div className="group flex cursor-pointer items-center gap-x-4 pl-4 font-semibold leading-[1.125rem]">
                <Image
                  src="/Icon-return.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
                <span className="flex flex-col gap-y-2">
                  <p>Return Delivery</p>
                  <p className="text-xs group-hover:underline">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <div
            className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-80"
            onClick={handleOutsideClick}
            role="presentation"
          >
            <div
              ref={modalRef}
              className="relative w-[90%] rounded-lg bg-white p-4 xl:w-auto"
            >
              <button
                type="button"
                className="absolute right-2 top-2 z-50"
                onClick={closeModal}
              >
                <XCircle size={32} className="fill-secondary-2" color="white" />
              </button>
              <ProductImgSlider product={product} />
            </div>
          </div>
        )}
        <div className="mb-[8.75rem] flex flex-col gap-y-[3.75rem]">
          <div className="flex items-center gap-x-4">
            <div className="h-10 w-5 rounded bg-button-2" />
            <span className="text-base font-semibold leading-[1.25rem] text-button-2">
              Related Item
            </span>
          </div>
          <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => (
              <RelatedItem key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default Product;
