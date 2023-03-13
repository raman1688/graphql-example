const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: "42.2",
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: "55.2",
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(minPrice, maxPrice) {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const product = products.find((product) => product.id === id);
  product.reviews.push({
    rating,
    comment,
  });
  return product;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
