import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductById } from "../services/productServices";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}

export function useProduct(id) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
}
