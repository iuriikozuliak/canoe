import ResultsItem from '../../client/components/results__item';

const FLIGHT = {
  "airline": {
    "code": "SU",
    "name": "Aeroflot"
  },
  "flightNum": 182,
  "start": {
    "dateTime": "2016-09-03T09:59:00+10:00",
    "airportCode": "SYD",
    "airportName": "Kingsford Smith",
    "cityCode": "SYD",
    "cityName": "Sydney",
    "countryCode": "AU",
    "countryName": "Australia",
    "latitude": -33.946111,
    "longitude": 151.177222,
    "stateCode": "NS",
    "timeZone": "Australia/Sydney"
  },
  "finish": {
    "dateTime": "2016-09-03T16:00:00-04:00",
    "airportCode": "JFK",
    "airportName": "John F Kennedy Intl",
    "cityCode": "NYC",
    "cityName": "New York",
    "countryCode": "US",
    "countryName": "United States",
    "latitude": 40.639751,
    "longitude": -73.778925,
    "stateCode": "NY",
    "timeZone": "America/New_York"
  },
  "plane": {
    "code": "333",
    "shortName": "Airbus A330-300",
    "fullName": "Airbus Industrie A330-300",
    "manufacturer": "Airbus",
    "model": "A330-300"
  },
  "distance": 16014,
  "durationMin": 1201,
  "price": 1590.82
};

describe('Results Item', function() {
  it('it renders correct markup', function() {
    expect(ResultsItem(FLIGHT)).to.be.eql(`
    <div class=undefined>
      <h4 class=undefined>
        $1590.82
      </h4>
      <div class=undefined>
        <div class=undefined>
          <strong>SU182</strong>
          Aeroflot
        </div>
        <div>
          <strong>23:59</strong>
          Kingsford Smith
        </div>
        <div>
          <strong>20:00</strong>
          John F Kennedy Intl
        </div>
      </div>
      <div class=undefined>
        20h 1m
      </div>
    </div>
  `);
  });
});