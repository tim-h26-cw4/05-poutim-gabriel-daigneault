import Icons from './utils/Icons.js';
import Chefs from './Chefs.js';

// La ligne suivante devrait être au TOUT début du init() du Main
class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    const chefs = document.querySelectorAll('[data-component="Chef"]');
    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];
      new Chefs(chef);
    }
  }
}

new Main();
