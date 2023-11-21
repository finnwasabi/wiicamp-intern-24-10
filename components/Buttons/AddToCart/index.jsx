import React from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import PropTypes from "prop-types";

import useAuthStore from "@/stores/authStore";
import useCartStore from "@/stores/cartStore";

function AddToCart({ product, className }) {
  const { isAuthenticated } = useAuthStore();
  const cartStore = useCartStore();

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

  return (
    <div className={className}>
      {isAuthenticated ? (
        <button
          type="button"
          onClick={handleAddToCart}
          className="ml-auto mr-auto flex"
        >
          <ShoppingCart className="mr-2" />
          <span>Add To Cart</span>
        </button>
      ) : (
        <Link href="/please">
          <button type="button" className="ml-auto mr-auto flex">
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
