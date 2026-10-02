import ProductCard from "../components/ProductCard";

import { useEffect } from "react";
import useProductStore from "../stores/useProductStore";

const Products = () => {
  const products = useProductStore((state) => state.products); // empty array
  const loadProducts = useProductStore((state) => state.loadProducts);
  //   useEffect(() => {
  //     const fetchProductList = async () => {
  //       const data = await fetchProducts();
  //       setProducts(data);
  //       console.log(data);
  //     };

  //     fetchProductList();
  //   }, [setProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (products.length === 0) return <p>Loading Products ...</p>;
  return (
    <>
      <div className="flex-col space-y-10">
        <h1 className="text-2xl font-bold text-center">Our Products</h1>
        <div className="grid grid-cols-3 gap-7 p-2">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
