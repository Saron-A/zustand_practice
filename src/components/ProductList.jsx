import { useEffect } from "react";
import useProductStore from "../stores/useProductStore";
import { fetchProducts } from "../services/productServices";

const ProductList = () => {
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
      <h1>Our Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
        </div>
      ))}
    </>
  );
};
export default ProductList;
