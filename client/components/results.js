import template from '../utils/template';
import styles   from '../styles/results.scss';

export default ({ flights = [], isLoading }) => {
  if (isLoading) {
    return 'Loading..';
  }

  return template`
    <div class=${ styles.canoe__results }>
      ${ flights.map(flight => 
        `<div class='results__item'>${ flight.airline.code }</div>`
      )}
    </div>`;
}