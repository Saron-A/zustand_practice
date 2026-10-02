import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../services/productServices";
import useCartStore from "../stores/useCartStore";

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
      console.log(data);
    };

    fetchProductDetail();
  }, [id]);

  return (
    <div className="flex flex-col gap-4">
      <Link to="/products">
        {" "}
        <p className="text-blue-600 underline"> Back to Products</p>
      </Link>
      <h1>{product.title}</h1>
      <div>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.rating?.rate}</p>
        <p>${product.price}</p>
      </div>
      <Link to="/cart">
        <button
          className="rounded-4xl border-0 px-4 py-2 bg-green-600 text-white font-bold"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductDetails;
