import template from '../utils/template';

export default ({ flights = [], isLoading }) => {
  if (isLoading) {
    return 'Loading..';
  }

  return template`
  <div class='canoe-results'>
    ${ flights.map(flight => 
        template`<div class='results__item'>${ flight.airline.code }</div>`
    )}
  </div>
`;
}