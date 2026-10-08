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

  // each card must display the quantity of the item, have buttons to increase, decrease and remove the item from the cart

  increaseQuantity: (item) =>
    set((state) => {
      // why do we need state here? we are updating the current state of the cart
      return {
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      };
    }),

  decreaseQuantity: (item) =>
    set((state) => {
      // make sure if the current quantity is 1, decreasing it means removing it from the cart
      return {
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        ),
      };
    }),

  removeFromCart: (item) =>
    set((state) => {
      return {
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== item.id,
        ),
      };
    }),
}));

export default useCartStore;
