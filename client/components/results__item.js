import moment from 'moment';
import {
  results__item,
  results__item__price,
  results__item__airline,
  results__item__info,
  results__item__duration
} from '../styles/results.scss';

export default (flight) => {
  const hours = parseInt(flight.durationMin / 60);
  const minutes = parseInt(flight.durationMin % 60);

  return `
    <div class=${ results__item }>
      <h4 class=${ results__item__price }>
        $${ flight.price }
      </h4>
      <div class=${ results__item__info }>
        <div class=${ results__item__airline }>
          <strong>${ flight.airline.code + flight.flightNum }</strong>
          ${ flight.airline.name }
        </div>
        <div class="results__item__start">
          <strong>${ moment(flight.start.dateTime).utc().format('HH:mm') }</strong>
          ${ flight.start.airportName }
        </div>
        <div class="results__item__finish">
          <strong>${ moment(flight.finish.dateTime).utc().format('HH:mm') }</strong>  
          ${ flight.finish.airportName } 
        </div>
      </div>
      <div class=${ results__item__duration }>
        ${ hours }h ${ minutes }m
      </div>
    </div>
  `;
}