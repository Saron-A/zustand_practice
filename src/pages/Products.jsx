import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import useProductStore from "../stores/useProductStore";
import { fetchProducts } from "../services/productServices";

const Products = () => {
  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);
  useEffect(() => {
    const fetchProductList = async () => {
      const data = await fetchProducts();
      setProducts(data);
      console.log(data);
    };

    fetchProductList();
  }, [setProducts]);

  if (products.length === 0) return <p>Loading Products ...</p>;
  return (
    <>
      <Navbar />
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
