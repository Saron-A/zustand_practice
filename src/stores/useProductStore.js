import { create } from "zustand";
// import { fetchProducts } from "../services/productServices";

const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));

export default useProductStore;
