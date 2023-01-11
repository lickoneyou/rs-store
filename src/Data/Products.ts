import { Product } from "../Interfaces/Product";

const PRODUCTS: Product[] = [
  {
    favorite: false,
    brand: 'H&M',
    category:'Evening wear' ,
    id: 'product_1',
    image: 'https://i.pinimg.com/564x/f2/a9/81/f2a9814f1d301cd2fa73ef274ad91ca7.jpg',
    name: 'product 0',
    price: 1113,
    stock: 12,
    description: "blablabla",
    discount: 14,
  },

  {
    favorite: false,
    brand: 'H&M',
    category:'Evening wear' ,
    id: 'product_2',
    image: 'https://i.pinimg.com/736x/10/d1/a2/10d1a28f20bfa7ca3f724b61557c12ba.jpg',
    name: 'product 1',
    price: 2122,
    stock: 10,
    description: "blablabla",
    discount: 11,
  },

  {
    favorite: false,
    id: 'product_3',
    brand: 'H&M',
    category:'Evening wear' ,
    image: 'https://i.pinimg.com/564x/b6/e6/33/b6e633339c9c407fc7c0fa02e2452ae3.jpg',
    name: 'product 2',
    price: 311,
    stock: 20,
    description: "blablabla",
    discount: 12,
  },

  {
    favorite: true,
    brand: 'H&M',
    category:'Evening wear' ,
    id: 'product_4',
    image: 'https://i.pinimg.com/564x/42/9a/ba/429abaea7c81d6647f910f6ef349dee9.jpg',
    name: 'product 3',
    price: 399,
    stock: 24,
    description: "blablabla",
    discount: 15,
  },

  {
    favorite: false,
    brand: 'H&M',
    category:'Evening wear', 
    id: 'product_5',
    image: 'https://i.pinimg.com/564x/19/1a/54/191a54af8e1b6fef0aafbbcdb06000b9.jpg',
    name: 'product 4',
    price: 599,
    stock: 11,
    description: "blablabla",
    discount: 9,
  },

  {
    favorite: false,
    brand: 'H&M',
    category:'Evening wear', 
    id: 'product_6',
    image: 'https://i.pinimg.com/564x/e3/aa/99/e3aa99152428ad7bca8ffbe0e330803d.jpg',
    name: 'product 6',
    price: 1499,
    stock: 15,
    description: "blablabla",
    discount: 17,
  },

  {
    favorite: false,
    brand: 'H&M',
    category:'Evening wear', 
    id: 'product_7',
    image: 'https://i.pinimg.com/564x/2d/9e/f9/2d9ef998bbcdd603c960ec83216292c1.jpg',
    name: 'product 7',
    price: 1499,
    stock: 24,
    description: "blablabla",
    discount: 15,
  },

  {
    favorite: false,
    brand: 'H&M',
    category:'Evening wear', 
    id: 'product_8',
    image: 'https://i.pinimg.com/564x/73/02/cb/7302cb80edf15de81dfc80ca0d9dc44a.jpg',
    name: 'product 8',
    price: 1499,
    
    stock: 24,
    description: "blablabla",
    discount: 15,
  },


  {
    favorite: false,
    brand: 'H&M',
    category:'Evening wear', 
    id: 'product_9',
    image: 'https://i.pinimg.com/564x/2d/a7/09/2da7091c76778b35acab7f20c5bf3094.jpg',
    name: 'product 9',
    price: 1499,
    stock: 24,
    description: "blablabla",
    discount: 15,
  },


  {
    favorite: false,
    brand: 'H&M',
    category:'Evening wear', 
    id: 'product_10',
    image: 'https://i.pinimg.com/564x/aa/49/dc/aa49dca688e9a95bbc4251d919671296.jpg',
    name: 'product 10',
    price: 1499,
    stock: 24,
    description: "blablabla",
    discount: 15,
  },
  {
    favorite: false,
    brand: 'H&M',
    category:'Evening wear', 
    id: 'product_11',
    image: 'https://i.pinimg.com/564x/e5/ad/3f/e5ad3f5015f65a079ffd62eb25d58269.jpg',
    name: 'product 11',
    price: 1499,
    stock: 24,
    description: "blablabla",
    discount: 15,
  },
  {
    favorite: false,
    brand: 'H&M',
    category:'Evening wear', 
    id: 'product_12',
    image: 'https://i.pinimg.com/736x/50/2a/cd/502acdc02db05dfd5e5c06dd7b8ff622.jpg',
    name: 'product 12',
    price: 1499,
    stock: 24,
    description: "blablabla",
    discount: 15,
  },



];

export const getProducts = (): Promise<Product[]> => {
  return new Promise<Product[]>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error("Something wend wrong"));
      } else {
        resolve(PRODUCTS);
      }
    }, 2000);
  });
};