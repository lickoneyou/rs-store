import { appComponents } from "../../Interfaces/appComponents";
import { Product } from "../../Interfaces/Product";
import "./ProductItem.css";

export let cart: string[] = [];
export let productWindow = ''
export let hash = ''
export const productCounter = document.querySelector(".productCounter");
const headerLink = document.querySelector(".header__link");


export const total = document.querySelector(".total");

let amount = 0;

export class ProductItem implements appComponents {
  constructor(private product: Product) {}

  getId = () => `${this.product.id}`;
  getIds = () => `aaa`;

  render() {
    return `
      <div class="card" style="width: 18rem; margin: 1em;">
        <img src="${this.product.image}" alt="${
      this.product.name
    }" class="card-img-top" style="backgroung-size: auto;"/>
        <div class="card-body">
          <h5 class="card-title">${this.product.name}</h5>
          <p class="card-text">${this.product.price}</p>
            <a href="#" class="btn_add btn btn-primary" id=${this.getId()}>BUY</a>
            <a href='#' class="btn_info btn btn-primary" id='info/${this.getId()}'>info</a>
        </div>
      </div>
    `;
  }

  addEvents() {

    const buttonProductWindow = document.getElementById(`info/${this.getId()}`) as HTMLLinkElement
    if (buttonProductWindow == null && location.hash !== "#cart" && location.hash !== hash) {
      throw new Error("!!!");
    } else if(location.hash !== "#") {
      buttonProductWindow.addEventListener('click', () =>{
        hash = `#/info/${this.getId()}`
        productWindow = `
        <div class='breadCrumbs'>
        <p>Store -></p>
        <p>${this.product.category} -></p>
        <p>${this.product.brand} -></p>
        <p>${this.product.name}</p>
        </div>
        <div class=" card mb-3" style="max-width: 540px; display: flex;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src='${this.product.image}' class="img-fluid rounded-start" style="max-width: 3rem;" alt="ing">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${this.product.name}</h5>
              <h6 class="card-title">${this.product.price}</h6>
              <ul class="product__features">
            <li class="product__property">Производитель: <span>${this.product.brand}</span></li>
            <li class="product__property">Категория: <span>${this.product.category}</span></li>
          </ul>
            </div>
          </div>
        </div>
        </div>`
        buttonProductWindow.href = `#/info/${this.getId()}`
            })
    }
    

    const buttonItem = document.getElementById(this.getId())!;
    if (buttonItem == null && location.hash !== "#cart") {
      throw new Error("!!!");
    } else if (location.hash !== "#cart") {
      buttonItem.addEventListener("click", () => {
        if (buttonItem.classList.contains("btn_delete")) {
          buttonItem.classList.remove("btn_delete");
          buttonItem!.innerHTML = "BUY";
          cart = cart.filter((product) => !product.match(this.product.image));
          productCounter!.innerHTML = String(cart.length);
          amount -= this.product.price;
          total!.innerHTML = String(amount);
        } else {
          buttonItem.classList.add("btn_delete");
          buttonItem!.innerHTML = "DROP FROM CART";
          cart.push(`<div class="${this.product.id}">
            <div class="">
              <div class="col-md-4">
                <img src="${
                  this.product.image
                }" class="img-fluid rounded-start" style="max-width: 10rem;" alt="${
            this.product.name
          }">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${this.product.name}</h5>
                  <h6 class="card-title">$${this.product.price}</h6>
                  <h6 class="card-title">${this.product.stock}</h6>
                  <div class='stock'>
                  <button class='btn btn-dark' id='${this.getIds()}' onclick="
                  const stockCounter = document.getElementById('${
                    "stockCounter" + this.getId()
                  }')
                  const total = document.querySelector('.total')
                  const productCounter = document.querySelector('.productCounter')
                  const summaruProducts = document.querySelector('.summaruProducts')
                  const summaryTotal = document.querySelector('.summaryTotal')
                  const summaryPromoTotal = document.querySelector('.summaryPromoTotal')
                  
                  if(stockCounter.innerHTML < ${this.product.stock}){
                   stockCounter.innerHTML++
                   total.innerHTML= total.innerHTML -0 + ${this.product.price}
                   productCounter.innerHTML++
                   summaruProducts.innerHTML++
                   summaryTotal.innerHTML = total.innerHTML
                   summaryPromoTotal.innerHTML = total.innerHTML * 1 / 100
                  }
            
                  ">+</button>
                  <div id='${"stockCounter" + this.getId()}'>1</div>
                  <button 
                  onclick="
                  const stockCounter = document.getElementById('${
                    "stockCounter" + this.getId()
                  }')
                  const total = document.querySelector('.total')
                  const productCounter = document.querySelector('.productCounter')
                  const summaruProducts = document.querySelector('.summaruProducts')
                  const summaryTotal = document.querySelector('.summaryTotal')
                  const summaryPromoTotal = document.querySelector('.summaryPromoTotal')

                  if(stockCounter.innerHTML > 1){
                   stockCounter.innerHTML--
                   total.innerHTML -= ${this.product.price}
                   productCounter.innerHTML--
                   summaruProducts.innerHTML--
                   summaryTotal.innerHTML = total.innerHTML
                   summaryPromoTotal.innerHTML = total.innerHTML * 1 / 100
                   
                  } else {
                    stockCounter.innerHTML--
                   total.innerHTML -= ${this.product.price}
                   productCounter.innerHTML--
                   summaruProducts.innerHTML--
                   summaryTotal.innerHTML = total.innerHTML
                   summaryPromoTotal.innerHTML = total.innerHTML * 1 / 100
                    let element = document.querySelector('${
                      "." + this.product.id
                    }')
                    element.style.display = 'none'
                   
                  }">-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `);
          productCounter!.innerHTML = String(cart.length);
          amount += this.product.price;
          total!.innerHTML = String(amount);
        }
      });
    }
  }
}

headerLink?.addEventListener("click", () => {
  cart.length = 0;
  amount = 0;
  total!.innerHTML = String(amount);
  productCounter!.innerHTML = String(amount);
});
