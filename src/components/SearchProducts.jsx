import { useState } from "react";
import { Link } from "react-router-dom";
// import { fetchProductById } from "../services/productServices";

const SearchProducts = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const cleanedSearchTerm = searchTerm.toLowerCase().trim();
  const searchedItems = products.filter((product) =>
    product.title.toLowerCase().includes(cleanedSearchTerm),
  );

  return (
    <div>
      <input
        type="text"
        name="product"
        id="product"
        // value={searchTerm}
        placeholder="Search Product..."
        onChange={(e) => setSearchTerm(e.target.value)}
        onKey
      />

      {/* Filter the products page to display the searched item */}
      <div>
        {cleanedSearchTerm && (
          <ul>
            {searchedItems.map((item) => (
              <Link to={`/products/${item.id}`}>
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchProducts;
