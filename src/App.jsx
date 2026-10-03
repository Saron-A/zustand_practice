import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

//Protected route - restrict who can access routes - gn make sure a user is logged in to access certain routes

// we wrap the routes we want to protect by having the component where we declared the protected route logic as a parent route and the route to be protected as a child route. The parent route will only have the property element leading to the component where the protection logic is defined

function App() {
  return (
    <div className="flex flex-col gap-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
