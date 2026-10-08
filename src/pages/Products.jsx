import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/productServices";
import ProductCard from "../components/ProductCard";
import SearchProducts from "../components/SearchProducts";
import CategoryFilter from "../components/CategoryFilter";

const Products = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm font-medium text-gray-500">Loading Products...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm font-semibold text-red-500">
          Something Went Wrong.
        </p>
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex justify-between gap-5 py-4 px-2 border border-gray-500 rounded mb-10">
        <SearchProducts products={data} />
        <CategoryFilter products={data} />
      </div>

      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-600">
          Our Collection
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Our Products
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
          Explore our collection and find something that fits your style.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Display products based on category filter applied */}
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Products;
