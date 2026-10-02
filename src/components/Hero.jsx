import { useEffect } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../stores/useProductStore";

const Hero = () => {
  const products = useProductStore((state) => state.products);
  const loadProducts = useProductStore((state) => state.loadProducts);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const featuredProduct = products[0];
  console.log("Featured Product: ", featuredProduct);

  return (
    <div className="flex flex-col justify-center w-full space-y-5">
      <h1 className="text-center text-3xl font-extrabold">
        Welcome to Mini Shopping cart using Zustand
      </h1>
      <p className="text-center text-sm italic text-gray-500">
        This is a simple project to practice zustand
      </p>

      <div className="flex justify-around bg-slate-900 ml-8 mr-8 w-fill rounded-4xl border-0 p-4 gap-2">
        <div className="flex flex-col gap-2 self-center">
          <h2 className="text-white font-bold text-2xl">
            Browse through our products to find what you like
          </h2>
          <p className="text-gray-100 font-light italic">
            Fashion, Technology and Jewelry all in one place
          </p>
          <Link to="/products">
            <button className="bg-green-500 text-white font-bold px-4 py-2 rounded-2xl border-0">
              Explore Products
            </button>
          </Link>
        </div>

        {/* Check that featuredProducts is populated because on initial render it is empty & attributes like src throws err */}
        {featuredProduct && (
          <img
            src={featuredProduct.image}
            alt={featuredProduct.title}
            className="h-80 w-70 bg-white px-4 py-2 rounded-2xl"
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
