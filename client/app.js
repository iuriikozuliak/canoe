import template from './utils/template';

class App {
  constructor() {
    this.$el = document.getElementById('app');

    this.render({ 
      message: 'happening', 
      airlines: ['Ryanair', 'Wizzair']}
    )
  }
  render({ message, airlines }) {
    this.$el.innerHTML = template`
      It's ${ message }: ${ airlines.map(v => `<p>${v}</p>`) }`;
  };
}

window.addEventListener('load', () => new App());