const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      console.log("Getting the products...");
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      console.log("Getting the products...");
      return productsModel.getProductsByPrice(args.minPrice, args.maxPrice);
    },
    product: (_, args) => {
      console.log("Getting the product by ID...");
      return productsModel.getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
        console.log("adding new product...");
        return productsModel.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
        console.log("adding new product review...");
        return productsModel.addNewProductReview(args.id, args.rating, args.comment);
    }
  }
};
