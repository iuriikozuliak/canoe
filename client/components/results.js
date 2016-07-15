import template from '../utils/template';

export default ({ flights }) => template`
  <div class="results">
    ${ flights.map(flight => 
        template`
        <div class="results__item">
          ${ flight.airline.code }
        </div>   
        `
    )}
  </div>
`;