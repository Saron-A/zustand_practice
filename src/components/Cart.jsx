import { Link } from "react-router-dom";
import useCartStore from "../stores/useCartStore";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  console.log(`There are ${cartItems.length} item(s) in the cart: `, cartItems);
  //   const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <p>Cart is Empty.</p>
          <Link to="/products">Browse Products</Link>
        </div>
      ) : (
        <div>
          <h1>Your Cart</h1>
          {cartItems?.map((item) => (
            <div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
