import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchProductById } from "../services/productServices";

const Hero = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", 7],
    queryFn: () => fetchProductById(7),
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm font-medium text-gray-500">Loading product...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm font-semibold text-red-500">
          Something went wrong while loading the product.
        </p>
      </div>
    );
  }

  const featuredProduct = data;

  const productCategories = ["Beauty", "Fragrances", "Furniture", "Groceries"];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-8 sm:px-6 lg:px-8">
      {/* Intro */}
      <section className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">
          Mini Shopping Cart
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Everything You Like, In One Place
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
          Browse fashion, electronics, jewelry, and more in this simple shopping
          experience built with React and Zustand.
        </p>
      </section>

      {/* Categories */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {productCategories.map((category) => (
            <div
              key={category}
              className="cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-5 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-gray-800 sm:text-base">
                {category}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Hero banner */}
      <section className="overflow-hidden rounded-3xl bg-slate-900 shadow-lg">
        <div className="flex flex-col items-center justify-between gap-8 p-6 sm:p-10 md:flex-row md:p-12">
          <div className="max-w-xl text-center md:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">
              Discover something new
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Browse products and find something you love.
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">
              Explore our collection of fashion, technology, and jewelry
              products all in one place.
            </p>

            <Link to="/products">
              <button className="mt-6 rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                Explore Products
              </button>
            </Link>
          </div>

          {featuredProduct && (
            <div className="flex h-64 w-full max-w-sm items-center justify-center rounded-2xl bg-white p-6 sm:h-72 md:w-80">
              <img
                src={featuredProduct.images[0]}
                alt={featuredProduct.title}
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Hero;
