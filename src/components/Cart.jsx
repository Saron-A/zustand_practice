import { Link } from "react-router-dom";
import useCartStore from "../stores/useCartStore";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  console.log(`There are ${cartItems.length} item(s) in the cart: `, cartItems);

  const subtotals = cartItems.map((item) => item.price * item.quantity);
  const finalTotal = subtotals.reduce((acc, current) => {
    return acc + current;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center px-4 py-12">
        <div className="w-full rounded-3xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <span className="text-2xl">🛒</span>
          </div>

          <h1 className="text-2xl font-extrabold text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
            You haven't added anything to your cart yet. Browse our products and
            find something you like.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-block rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-green-600 hover:shadow-md"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-600">
          Shopping Cart
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Your Cart
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your
          cart
        </p>
      </div>

      {/* Cart items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
          >
            {/* Product image */}
            <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 p-4 sm:w-32">
              <img
                src={item.images[0]}
                alt={item.title}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Product information */}
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {item.category}
              </p>

              <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>

              <p className="text-xl font-extrabold text-gray-900">
                ${item.price}
              </p>
            </div>

            {/* View product */}
            {/* <Link
              to={`/products/${item.id}`}
              className="rounded-xl border border-gray-300 px-5 py-2.5 text-center text-sm font-semibold text-gray-700 transition hover:border-green-500 hover:bg-green-50 hover:text-green-600"
            >
              View Product
            </Link>
            increase, decrease and remove from cart functionality */}

            <div className="flex flex-col content-center gap-2 rounded-xl border-1 border-gray-300 h-full py-2.5 px-2">
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => increaseQuantity(item)}
                  className="border-0 px-1 bg-green-500 text-white font-extrabold text-2xl"
                >
                  +
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => decreaseQuantity(item)}
                  className="border-0 px-1 bg-green-500 text-white font-extrabold text-2xl"
                >
                  -
                </button>
              </div>
              <div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="py-1.25 px-4 bg-red-500 text-white font-bold rounded-2xl border-0"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Total Price and Checkout */}
        <div>
          {/* First we calculate the subtotal of each product i.e price * quantity
              Then we add all the subtotals together to find the final total price
              
              */}
          <p>Total Price: {finalTotal} </p>
        </div>
      </div>
    </main>
  );
};

export default Cart;
