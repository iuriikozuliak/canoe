export default (flight) => `
  <div class='results__item'>
    <div class="results__item__airline">${ flight.airline.name }</div>
    <div class="results__item__flightNum">${ flight.flightNum }</div>
    <div class="results__item__start">
      ${ flight.start.dateTime }
    </div>
    <div class="results__item__finish">
      ${ flight.finish.dateTime }
    </div>
    <div class="results__item__duration">
      ${ flight.finish.dateTime }
    </div>
    <div class="results__item__price">
      ${ flight.price }
    </div>
  </div>
`;