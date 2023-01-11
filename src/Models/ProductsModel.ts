import { Product } from "../Interfaces/Product";
import { getProducts } from "../Data/Products";

import { store } from "../Store/Store";

export class ProductsModel {
  static isExist = false;
  static instance: ProductsModel;

  constructor() {
    if (ProductsModel.isExist) {
      return ProductsModel.instance;
    }

    ProductsModel.isExist = true;
    ProductsModel.instance = this;
  }

  getProducts(): Promise<Product[]> {
    return getProducts().then((products) => {
      store.update({
        products,
      });
      return products;
    });
  }
}

export const productModel = new ProductsModel();
