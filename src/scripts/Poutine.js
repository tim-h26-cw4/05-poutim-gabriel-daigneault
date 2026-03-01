export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-type');
    this.selectedType = '';
    this.init();
  }

  init() {
    //console.log(this.types);
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }

    const type = event.currentTarget;
    type.classList.add('is-active');
    this.selectedType = type.textContent;
    //console.log(this.selectedType);

    this.updatePhoto()
  }

  updatePhoto() {
    //console.log('photo');
    const image = this.element.querySelector('.js-image');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
