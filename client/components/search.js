import template    from '../utils/template';
import SearchField from './search__field';
import { 
  canoe__search, 
  canoe__search__button 
} from '../styles/search.scss';


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
          ${ ['from', 'to', 'date'].map(SearchField(query)) }
          <input type="submit" value="Submit" class=${ canoe__search__button } />
        </form>
      </div>
  `;
  }
};