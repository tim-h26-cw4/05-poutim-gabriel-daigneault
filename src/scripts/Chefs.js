import Poutine from './Poutine.js';

export default class Chefs {
  constructor(element) {
    this.element = element;
    this.menu = [];
    const container = document.createElement('p');
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
  }
}
