import Poutine from './Poutine.js';

export default class Chefs {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = element.querySelector('.js-container');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      this.menu.push(new Poutine(poutine));
      //console.log(this.menu);
    }

    const btnOrder = this.element.querySelector('.js-commande');
    btnOrder.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    //console.log('boutonnn');
    this.total = 0;

    const poutines = this.element.querySelectorAll('.js-image');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      if (poutine.classList.contains('is-active')) {
        this.total += 1;
      }
      //console.log(this.menu);
    }

    this.container.innerText = '';
    const commande = document.createElement('p');
    commande.innerText = `Nombre total de poutine(s) : ${this.total}`;
    this.container.appendChild(commande);

    console.log(this.total);
    //aweye push
  }
}