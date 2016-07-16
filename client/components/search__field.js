import { canoe__search__field } from '../styles/search.scss';

export default query => name => `
  <input
    type  = "text" 
    class = ${ canoe__search__field } 
    name  = ${ name }
    ${ query[name] && `value=${ query[name] }`}  />
`;