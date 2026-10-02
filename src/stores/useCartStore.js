import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  // we wrap every return in the set function is curly braces because the set function returns an object
  addToCart: (product) =>
    set((state) => {
      // check if the item already exists
      const existingItem = state.cartItems.find(
        (item) => product.id === item.id,
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      // if it is a new item
      const newItem = {
        ...product,
        quantity: 1,
      };
      return { cartItems: [...state.cartItems, newItem] };
    }),

  //     increaseQuantity: (product) => set((state) => {
  //       return
  //   })
}));

export default useCartStore;
