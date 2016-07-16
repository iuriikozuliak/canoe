import template    from '../utils/template';
import ResultsItem from './results__item';
import styles      from '../styles/results.scss';
import _flow       from 'lodash/fp/flow';
import _sortBy     from 'lodash/fp/sortBy';
import _map        from 'lodash/fp/map';

export default ({ flights = [], isLoading }) => {
  if (isLoading) {
    return 'Loading..';
  }

  return template`
    <div class=${ styles.canoe__results }>
      ${ _flow(
          _sortBy(v => v.price),
          _map(ResultsItem)
        )(flights) 
      }
    </div>`;
}