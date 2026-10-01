import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="border-1 border-gray-500 p-4 space-y-2">
      <div className="flex justify-between gap-4">
        <img src={product.image} alt={product.title} className="w-50 h-40" />
        <h3 className="self-center font-semibold">{product.title}</h3>
      </div>

      <p className="text-gray-500 text-sm font-medium">{product.description}</p>
      <p className="font-extrabold text-blue-500 text-2xl">${product.price}</p>
      <div className="flex flex-col justify-center gap-6 mt-10 mb-0 w-full">
        <Link to={`/products/${product.id}`}>
          <button className="bg-green-500 px-4 py-2 rounded-4xl border-0 text-white">
            View Details
          </button>
        </Link>
        <Link to="/cart">
          <button className="bg-green-500 px-4 py-2 rounded-4xl border-0 text-white">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
