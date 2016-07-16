export default class Search {
  constructor() {
    this.$el = document.getElementById('search-form');

    this.$el.addEventListener('submit', (e) => {
      e.preventDefault();
      const { 
        target: { date, from, to} 
      } = e;
      
      window.location.hash = `date=${date.value}&from=${from.value}&to=${to.value}`
    })
  }
  static render({ query: { from, to, date } }) {
    return `
      <form action="#" method="get" id="search-form">
        <input type="text" value=${from} name="from" />
        <input type="text" value=${to}   name="to"/>
        <input type="text" value=${date} name="date"/>
        <input type="submit" value="Submit" />
      </form>
  `;
  }
};