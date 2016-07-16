import template          from '../utils/template';
import { canoe__search } from '../styles/search.scss';
import SearchItem        from './search__item';

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

    window.location.hash = `date=${ date.value }&from=${ from.value }&to=${ to.value }`
  }
  static render({ query }) {
    return template`
      <div class=${ canoe__search }>
        <form action="#" id="search-form">
          ${ ['from', 'to', 'date'].map(SearchItem(query)) }
          <input type="submit" value="Submit" />
        </form>
      </div>
  `;
  }
};