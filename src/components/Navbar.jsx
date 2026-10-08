import { NavLink } from "react-router-dom";
import useCartStore from "../stores/useCartStore";

const Navbar = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  const navLinkStyles = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition duration-200 ${
      isActive
        ? "bg-green-50 text-green-600"
        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-green-500 px-3 py-2 text-lg font-extrabold tracking-wide text-white shadow-sm">
            MINI
          </div>

          <span className="hidden text-sm font-semibold text-gray-700 sm:block">
            Shopping
          </span>
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkStyles}>
            Products
          </NavLink>

          <NavLink to="/cart" className={navLinkStyles}>
            Cart {cartItems.length > 0 && <span>({cartItems.length})</span>}
          </NavLink>

          <NavLink to="/login" className={navLinkStyles}>
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
