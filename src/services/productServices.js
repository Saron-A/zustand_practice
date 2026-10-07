const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    // check for response error
    if (!response.ok) {
      throw new Error(`HTTP ERROR: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.products);
    return data.products;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const fetchProductById = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP ERROR: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { fetchProducts, fetchProductById };
