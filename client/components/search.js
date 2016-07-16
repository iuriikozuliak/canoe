import template from '../utils/template';

export default class Search {
  constructor() {
    this.$el = document.getElementById('search-form');

    this.$el.addEventListener('submit', this.onFormSubmit)
  }
  onFormSubmit(e) {
    e.preventDefault();
    const { 
      target: { date, from, to} 
    } = e;

    window.location.hash = `date=${date.value}&from=${from.value}&to=${to.value}`
  }
  static render({ query }) {
    const field  = (name) => `<input type="text" ${query[name] && `value=${query[name]}`} name=${name} />`;
    
    return template`
      <form action="#" id="search-form">
        ${['from', 'to', 'date'].map(field)}
        <input type="submit" value="Submit" />
      </form>
  `;
  }
};