import template    from '../utils/template';
import ResultsItem from './results__item';
import styles      from '../styles/results.scss';

export default ({ flights = [], isLoading }) => {
  if (isLoading) {
    return 'Loading..';
  }

  return template`
    <div class=${ styles.canoe__results }>
      ${ flights.map(ResultsItem) }
    </div>`;
}