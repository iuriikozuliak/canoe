import request     from 'superagent';
import template    from '../utils/template';
import SearchField from './search__field';
import { 
  canoe__search, 
  canoe__search__button 
} from '../styles/search.scss';

export default class Search {
  constructor() {
    this.$el     = document.getElementById('search-form');
    this.$inputs = this.$el.querySelectorAll('input');

    Array.prototype.forEach.call(this.$inputs, this.attachOnKeyDown(this.onKeyDown));
    this.$el.addEventListener('submit', this.onFormSubmit);
  }
  attachOnKeyDown(onKeyDown) {
    return (el) => el.addEventListener('keydown', onKeyDown);
  }
  async onKeyDown({ target }) {
    const value = target.value;
      
    if (value.length < 3) return;

    const req = await request
      .get('/airports')
      .query({ q: target.value });

    const options = req.body.map(v => v.airportName);

    return target.nextElementSibling.innerHTML = template`${ options }`;
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
          ${ ['from', 'to', 'date'].map(SearchField(query)) }
          <button type="submit" class=${ canoe__search__button }>Search</button>
        </form>
      </div>
  `;
  }
};