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
      <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full rounded-3xl border border-gray-200 bg-white px-6 py-14 text-center shadow-sm">
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
            className="mt-6 inline-block rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-green-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-600">
          Shopping Cart
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Your Cart
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your
          cart
        </p>
      </div>

      {/* Cart layout */}
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Cart items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-200 hover:shadow-md sm:p-5"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                {/* Product image */}
                <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 p-4 sm:h-28 sm:w-28">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Product information */}
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {item.category}
                  </p>

                  <h2 className="line-clamp-2 text-base font-bold text-gray-900 sm:text-lg">
                    {item.title}
                  </h2>

                  <p className="text-lg font-extrabold text-gray-900">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity + remove */}
                <div className="flex items-center justify-between gap-4 border-t border-gray-100 pt-4 sm:flex-col sm:items-end sm:border-t-0 sm:pt-0">
                  <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50">
                    <button
                      onClick={() => decreaseQuantity(item)}
                      aria-label={`Decrease quantity of ${item.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-l-xl text-lg font-bold text-gray-600 transition hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      −
                    </button>

                    <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-200 bg-white px-2 text-sm font-bold text-gray-900">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item)}
                      aria-label={`Increase quantity of ${item.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-r-xl text-lg font-bold text-gray-600 transition hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item)}
                    className="text-sm font-medium text-red-500 transition hover:text-red-600 hover:underline focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Item subtotal */}
              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-sm">
                <span className="text-gray-500">
                  {item.quantity} × ${item.price.toFixed(2)}
                </span>

                <span className="font-bold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>

          <div className="mt-6 space-y-4 border-b border-gray-200 pb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Items</span>
              <span className="font-medium text-gray-900">
                {cartItems.length}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium text-gray-900">
                ${finalTotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Shipping</span>
              <span className="font-medium text-green-600">Free</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-base font-semibold text-gray-700">Total</span>

            <span className="text-2xl font-extrabold text-gray-900">
              ${finalTotal.toFixed(2)}
            </span>
          </div>

          <button
            disabled
            className="mt-6 w-full cursor-not-allowed rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-white opacity-60"
          >
            Checkout
          </button>

          <Link
            to="/products"
            className="mt-3 block text-center text-sm font-medium text-gray-500 transition hover:text-green-600"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
