import { Link } from "react-router-dom";
import useCartStore from "../stores/useCartStore";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <Link
        to={`/products/${product.id}`}
        className="flex h-64 items-center justify-center bg-gray-50 p-6"
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Product information */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-400">
          {product.category}
        </p>

        <h3 className="line-clamp-2 min-h-12 text-base font-bold leading-6 text-gray-900">
          {product.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Price */}
        <p className="mt-5 text-2xl font-extrabold text-gray-900">
          ${product.price}
        </p>

        {/* Buttons */}
        <div className="mt-auto flex flex-col gap-3 pt-6">
          <Link
            to={`/products/${product.id}`}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
          >
            View Details
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="w-full rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
