class App {
  constructor() {
    this.$el = document.getElementById('app');

    this.render({ message: 'happening'})
  }
  render({ message }) {
     this.$el.innerHTML = `It's ${ message }`;
  };
}

window.addEventListener('load', () => new App());