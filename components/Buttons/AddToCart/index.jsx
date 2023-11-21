import React from "react";
import { toast } from "react-toastify";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import PropTypes from "prop-types";

import useAuthStore from "@/stores/authStore";
import useCartStore from "@/stores/cartStore";

import "react-toastify/dist/ReactToastify.css";

function AddToCart({ product, className }) {
  const { isAuthenticated } = useAuthStore();
  const cartStore = useCartStore();

  const handleAddToCart = () => {
    const existingCartItem = cartStore.items.find(
      (item) => item.productId === product.id,
    );
    if (existingCartItem && existingCartItem.quantity < 999) {
      cartStore.increaseQuantity(product.id);
      toast.success("Already in Cart, added 1 more!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (existingCartItem && existingCartItem.quantity === 999) {
      toast.error(`Maximum quantity reached! (${existingCartItem.quantity})`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      cartStore.addToCart({
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: 1,
      });
      toast.success("Added to Cart!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <button
          type="button"
          onClick={handleAddToCart}
          className={clsx(className)}
        >
          <div>
            <ShoppingCart className="mr-2" />
          </div>
          <div>Add To Cart</div>
        </button>
      ) : (
        <Link href="/please">
          <button type="button" className={clsx(className)}>
            <ShoppingCart className="mr-2" />
            <span>Add To Cart</span>
          </button>
        </Link>
      )}
    </div>
  );
}

AddToCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
  }).isRequired,
  className: PropTypes.string.isRequired,
};

export default AddToCart;
