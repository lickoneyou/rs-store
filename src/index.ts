export * from "../src/";
import "./global.css";

import { App } from "./components/app";
import { store } from "./Store/Store";
import { cart, productCounter, total } from "./components/ProductItem";

const main = document.querySelector(".main") as HTMLElement;
const pupUpWrapper = document.querySelector('.pupUpWrapper') as HTMLElement
const pupUpWrapper2 = document.querySelector('.pupUpWrapper2') as HTMLElement
const pupUp = document.querySelector('.pupUp') as HTMLElement
const userNameInput = document.querySelector('.userNameInput') as HTMLInputElement
const userPhoneNumberInput = document.querySelector('.userPhoneNumberInput') as HTMLInputElement
const userAdress = document.querySelector('.userAdress') as HTMLInputElement
const userEmail = document.querySelector('.userEmail') as HTMLInputElement
const cardNumberInput = document.getElementById('cardNumberInput') as HTMLInputElement
const cardImg = document.querySelector('.cardImg') as HTMLImageElement
const cardValid = document.querySelector('.cardValid') as HTMLInputElement
const cardCvv = document.querySelector('.cardCvv') as HTMLInputElement
const confirmButton = document.querySelector('.confirmButton') as HTMLLinkElement
const confirmError = document.querySelector('.confirmError') as HTMLElement




if (!main) {
  throw new Error("The main is undefined!");
}


const app = new App();

main.innerHTML = app.render();

store.$state.subscribe(() => {
  main.innerHTML = app.render();
  app.addEvents();
});

window.addEventListener("hashchange", () => {
  main.innerHTML = app.render();
  app.addEvents();

  if (location.hash == "#cart"){
    main.style.display = 'inline'
  } else{
    main.style.display = 'grid'
  }
});


pupUpWrapper.addEventListener('click', () =>{
  pupUpWrapper.style.display = 'none'
  pupUp.style.display = 'none'
})

userNameInput.oninput = () => {
  if(userNameInput.value.split(' ')[0].length < 3 || userNameInput.value.split(' ')[1].length < 3 || userNameInput.value.split(' ').length < 2){
    userNameInput.style.borderColor = 'red'
  } else{
    userNameInput.style.borderColor = 'green'
  }
}

userPhoneNumberInput.oninput = () => {
  userPhoneNumberInput.value = userPhoneNumberInput.value.replace (/[^\+\d]/g, '')
  if(userPhoneNumberInput.value[0] != '+' || userPhoneNumberInput.value.length < 9){
    userPhoneNumberInput.style.borderColor = 'red'
  } else{
    userPhoneNumberInput.style.borderColor = 'green'
  }
}

userAdress.oninput = () => {
  if(userAdress.value.split(' ')[0].length < 5 || userAdress.value.split(' ')[1].length < 5 || userAdress.value.split(' ')[2].length < 5 || userAdress.value.split(' ').length < 3){
    userAdress.style.borderColor = 'red'
  } else{
    userAdress.style.borderColor = 'green'
  }
}

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInput() {
  if (isEmailValid(userEmail.value)) {
    userEmail.style.borderColor = 'green';
  } else {
    userEmail.style.borderColor = 'red';
  }
}

userEmail.addEventListener('input', onInput);

function isEmailValid(value: string) {
return EMAIL_REGEXP.test(value)}

const cardImgSrc = {
  default: 'https://play-lh.googleusercontent.com/HDhZc1410lGkN3OAhZ2lwWBz0ijuIfW_6NEAUw1jOaMVPpIYV1FTq4R4lWH6djvQ3Q',
  visa: 'https://play-lh.googleusercontent.com/lKebetEHVDuBrbq5KJJ4MK6V6BaFuo0Mj9Qy9YZkoenrEDZVU-IzLrbAuoKMaCT4nA',
  mastercard: 'https://play-lh.googleusercontent.com/czro-ULAemRM1bMldf9gHQ7ajfa9NzKiZXFjI85mxawo60CaKMyHsjWaM38KHiZpsgY',
  americanExpress: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png'
}

cardNumberInput.oninput = () =>{
  if(cardNumberInput.value[0] == '3'){
    cardImg.src = cardImgSrc.americanExpress
    if(cardNumberInput.value.length < 16) {
      cardNumberInput.style.borderColor = 'red'
  } else{
    cardNumberInput.style.borderColor = 'green'
  }
  } else if(cardNumberInput.value[0] == '4'){
    cardImg.src = cardImgSrc.visa
    if(cardNumberInput.value.length < 16) {
      cardNumberInput.style.borderColor = 'red'
  } else{
    cardNumberInput.style.borderColor = 'green'
  }
  } else if(cardNumberInput.value[0] == '5'){
    cardImg.src = cardImgSrc.mastercard
    if(cardNumberInput.value.length < 16) {
      cardNumberInput.style.borderColor = 'red'
  } else{
    cardNumberInput.style.borderColor = 'green'
  }
  } else{
    cardImg.src = cardImgSrc.default
    if(cardNumberInput.value.length < 16) {
      cardNumberInput.style.borderColor = 'red'
  } else{
    cardNumberInput.style.borderColor = 'green'
  }
  }
}

cardValid.oninput = () => {
  if(+(cardValid.value[0] + cardValid.value[1]) < 0 || +(cardValid.value[0] + cardValid.value[1]) > 12 || cardValid.value.length < 5) {
    cardValid.style.borderColor = 'red'
  } else{
    cardValid.style.borderColor = 'green'
  }
  if(cardValid.value.length == 2){
    cardValid.value = cardValid.value + '/'
  } else if(cardValid.value.length == 3){
    cardValid.value = cardValid.value.replace(/[/]/gi, '')
  }
}

cardCvv.oninput = () => {
  if(cardCvv.value.length < 3) {
    cardCvv.style.borderColor = 'red'
  } else{
    cardCvv.style.borderColor = 'green'
  }
}

confirmButton.addEventListener('click', () =>{
if(userNameInput.style.borderColor === 'red' ||
  userPhoneNumberInput.style.borderColor === 'red' ||
  userAdress.style.borderColor === 'red' ||
  userEmail.style.borderColor === 'red' ||
  cardNumberInput.style.borderColor === 'red' ||
  cardValid.style.borderColor === 'red' ||
  cardCvv.style.borderColor === 'red' ||
  userNameInput.value.length === 0 || 
  userPhoneNumberInput.value.length === 0 || 
  userAdress.value.length === 0 || 
  userEmail.value.length === 0 || 
  cardNumberInput.value.length === 0 || 
  cardValid.value.length === 0 || 
  cardCvv.value.length === 0
){
  confirmError.style.display = 'inline'
} else{
  confirmButton.href = '#'
  pupUpWrapper.style.display = 'none'
  pupUp.style.display = 'none'
  pupUpWrapper2.style.display = 'flex'
    setTimeout(() => {
      pupUpWrapper2.style.display = 'none'
      cart.length = 0
      productCounter!.innerHTML = '0'
      total!.innerHTML = '0.00'
      alert('Order is processed')
    }, 4000);
}
})