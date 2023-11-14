import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import useAuthStore from "@/stores/authStore";
import useCartStore from "@/stores/cartStore";
import useWishStore from "@/stores/wishStore";

import FillEye from "../../Buttons/FillEye";
import FillHeart from "../../Buttons/FillHeart";

import s from "./ThisMonthItem.module.scss";

// Function to generate stars in a row
const renderStars = (rating) => {
  const starsArray = [];
  const filledStars = Math.floor(rating);
  for (let i = 0; i < filledStars; i += 1) {
    starsArray.push(
      <svg
        key={`star-${i}`}
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="#FFAD33"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Path for filled star */}
        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" />
      </svg>,
    );
  }
  // Adding greyed out stars for the remaining unfilled stars
  for (let i = filledStars; i < 5; i += 1) {
    starsArray.push(
      <svg
        key={`star-${i}`}
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="#D1D5DB" // Grey color
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Path for empty star */}
        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" />
      </svg>,
    );
  }
  return <div style={{ display: "flex" }}>{starsArray}</div>;
};

function ThisMonthItem({ product }) {
  const { image, title, price, rating } = product;
  const [salePrice, setSalePrice] = useState(0);
  const cartStore = useCartStore();
  const wishStore = useWishStore();
  const { isAuthenticated } = useAuthStore();

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

  const handleAddToCart = () => {
    const existingCartItem = cartStore.items.find(
      (item) => item.productId === product.id,
    );
    if (existingCartItem) {
      cartStore.increaseQuantity(product.id);
    } else {
      cartStore.addToCart({
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }
  };

  useEffect(() => {
    const calculatedDiscountPercentage =
      Math.floor(Math.random() * (70 - 10 + 1)) + 10;

    const calculatedSalePrice =
      price - (price * calculatedDiscountPercentage) / 100;
    setSalePrice(calculatedSalePrice);
  }, [price]);

  return (
    <div className={clsx(s.SaleItem, "block h-[21.875rem] w-[16.875rem]")}>
      <div className="relative flex h-[15.625rem] w-[16.875rem] overflow-hidden rounded bg-white">
        <button type="button" className={s.AddToCart} onClick={handleAddToCart}>
          Add To Cart
        </button>
        <Image
          className="absolute left-1/2 top-1/2 max-h-[250px] max-w-[270px] -translate-x-1/2 -translate-y-1/2"
          src={image}
          width={270}
          height={250}
          alt="Picture of item"
          style={{ objectFit: "contain" }}
        />
        {isAuthenticated ? (
          <div>
            {existingWishItem ? (
              <button type="button" onClick={handleAddToWish}>
                <FillHeart color="white" bg="bg-secondary-2" />
              </button>
            ) : (
              <button type="button" onClick={handleAddToWish}>
                <FillHeart color="black" bg="bg-white" />
              </button>
            )}
          </div>
        ) : (
          <Link href="/please">
            <FillHeart color="black" bg="bg-white" />
          </Link>
        )}
        <div className="absolute right-3 top-[3.375rem] flex cursor-pointer">
          <FillEye />
        </div>
      </div>
      <Link href={`/product/${product.id}`}>
        <span className="mt-4 line-clamp-1 font-bold">{title}</span>
        <span className="mt-2 flex font-semibold">
          <p className="mr-3 text-secondary-2">${price}</p>
          <p className="text-text-1 line-through">
            {`$${salePrice.toFixed(2)}`}
          </p>
        </span>
        <span className="mt-2 flex items-baseline">
          {renderStars(rating.rate)}
          <p className="ml-2 text-sm font-semibold text-text-1">
            ({rating.count})
          </p>
        </span>
      </Link>
    </div>
  );
}

ThisMonthItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default ThisMonthItem;
