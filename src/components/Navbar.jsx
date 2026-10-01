import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-end space-x-10 px-4 py-2">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
};

export default Navbar;
