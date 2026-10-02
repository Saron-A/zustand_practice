import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full px-4 py-2">
      <div className="text-2xl font-bold text-green-500 p-2 rounded-4xl bg-green-200 border-green-500 border-1">
        MINI
      </div>
      <div className="justify-end space-x-10 ">
        <NavLink
          to="/"
          className="font-light text-gray-500 p-2 hover:bg-green-50 transition-all duration-200"
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="font-light text-gray-500 p-2 hover:bg-green-50 transition-all duration-200"
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className="font-light text-gray-500 p-2 hover:bg-green-50 transition-all duration-200"
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
