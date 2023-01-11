import { appComponents } from "../../Interfaces/appComponents";
import { Product } from "../../Interfaces/Product";
import { productModel } from "../../Models/ProductsModel";
import { store } from "../../Store/Store";
import { ProductItem } from "../ProductItem";

export class ProductList implements appComponents {
  private loading = false;
  private error: Error | null = null;
  private products: Product[] = [];
  private productsComponents: ProductItem[] = [];

  constructor() {
    this.fetchProducts();

    store.$state.subscribe(({ products }) => {
      this.products = products;
      this.productsComponents = this.products.map(
        (product) => new ProductItem(product)
      );
      if (products.length) {
        this.loading = false;
        this.error = null;
      }
    });
  }

  fetchProducts() {
    this.loading = true;
    store.update();
    productModel.getProducts().catch((error) => {
      this.error = error;
      this.loading = false;
    });
  }

  render() {
    return `<h2>ProductList</h2>
        <div style="display:flex;
        flex-wrap: wrap;">
        ${this.productsComponents.map((product) => product.render()).join("")}
            </div>
            <div>
            ${
              this.loading
                ? `<div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>`
                : ``
            }
          </div>
          <div>
            ${this.error ? `<p>${this.error.message}</p>` : ``}
            </div>

        `;
  }
  addEvents() {
    this.productsComponents.forEach((component) => component.addEvents());
  }
}
