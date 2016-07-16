import { canoe__search__item } from '../styles/search.scss';

export default query => name => 
  `<input
    type  = "text" 
    class = ${ canoe__search__item } 
    name  = ${ name }
    ${ query[name] && `value=${ query[name] }`}  />`;