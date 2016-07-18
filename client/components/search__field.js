import { 
  canoe__search__field,
  canoe__search__item,
  canoe__search__options
} from '../styles/search.scss';

export default query => name => `
  <div class=${ canoe__search__item } >
    <input
      type      = ${ name === 'date' ? name : 'text'}
      name      = ${ name }
      class     = ${ canoe__search__field }
      data-code = ${ query[name] }
      required  = "required"
      ${ query[name] && `value=${ query[name] }`}  />
    <div class=${ canoe__search__options }></div>
  </div>`;