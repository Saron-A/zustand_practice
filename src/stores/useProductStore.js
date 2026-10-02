import { create } from "zustand";
import { fetchProducts } from "../services/productServices";

const useProductStore = create((set) => ({
  products: [],
  loadProducts: async () => {
    const data = await fetchProducts();
    set({ products: data });
  },
}));

export default useProductStore;
