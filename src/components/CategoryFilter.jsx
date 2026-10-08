const CategoryFilter = ({ products }) => {
  // filter and display products based on selected category
  //avoid repetition - using Set and Set requires the keyword new
  const eachProductsCategories = products.map((product) => product.category);

  //Set is a js function that keeps only unique values
  const categories = [...new Set(eachProductsCategories)];

  const filterProductsByCategory = (category) => {
    const filteredProducts = products.filter(
      (product) => product.category === category,
    );
    console.log(filteredProducts);
  };

  console.log(categories);
  return (
    <select name="" id="" className="py-2 px-4 border border-gray-500 rounded">
      <option value="all" default>
        All
      </option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
