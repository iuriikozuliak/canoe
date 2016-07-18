import request     from 'superagent';
import template    from '../utils/template';
import attachEvent from '../utils/attachEvent'
import SearchField from './search__field';
import _isEqual    from 'lodash/isEqual';
import { 
  canoe__search, 
  canoe__search__button,
  isFormLoading
} from '../styles/search.scss';

export default class Search {
  constructor() {
    this.props = {}
  }
  init(props) {
    this.props   = props;
    this.$el     = document.getElementById('search-form').parentNode;
    this.$inputs = this.$el.querySelectorAll('input[type="text"]');

    Array.prototype.forEach.call(
      this.$inputs, 
      attachEvent(
        'keydown',
        this.onKeyDown(this.onOptionClick)
      )
    );
    this.$el.addEventListener('submit', this.onFormSubmit);
  }
 updateComponent(props) {
    if (_isEqual(this.props, props)) return;

    const { query } = props; 
    this.props = props;
    this.render(props);
    this.init();
  }
  attachOnKeyDown(onKeyDown) {
    return ($el) => $el.addEventListener('keydown', onKeyDown);
  }
  onKeyDown(onOptionClick) {
    return async ({ target }) => {
      const value = target.value;
        
      if (value.length < 3) return;

      const req = await request
        .get('/airports')
        .query({ q: target.value });

      const options = req.body.map(v => 
        `<p data-code = ${ v.airportCode } >${ v.airportName }</p>`
      );
      const $optionsList = target.nextElementSibling;

      $optionsList.addEventListener('click', onOptionClick);
      $optionsList.innerHTML = template`${ options }`;
    }
  }
  onOptionClick(e) {
    const $options = e.currentTarget
    const $option  = e.target;
    const $input   = $options.previousElementSibling;

    $input.setAttribute('data-code', $option.dataset.code);
    $input.value       = $option.dataset.code;
    $options.innerHTML = '';
  }
  onFormSubmit(e) {
    e.preventDefault();
    const { 
      target: { date, from, to} 
    } = e;

    window.location.hash = `date=${ date.value }&from=${ from.dataset.code }&to=${ to.dataset.code }`
  }
  render({ query, isLoading }) {
    return template`
      <div class="${ canoe__search + (isLoading ? ' ' + isFormLoading : '') }">
        <form action="#" id="search-form">
          ${ ['from', 'to', 'date'].map(SearchField(query)) }
          <button type="submit" class=${ canoe__search__button }>Search</button>
        </form>
      </div>
  `;
  }
};