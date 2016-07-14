import createServer from '../_helpers/createServer';

describe('airports API', function() {
  let request;
  before(async function () {
    request = await createServer();
  });

  describe('GET /airports', function() {
    it('returns airports list', async function() {
      await request.get('/airports?q=Melbourne')
        .expect(200, {
          data: [
            {
              "airportCode": "MLB",
              "airportName": "Melbourne International Arpt",
              "cityCode": "MLB",
              "cityName": "Melbourne",
              "countryCode": "US",
              "countryName": "United States",
              "latitude": 28.102753,
              "longitude": -80.645258,
              "stateCode": "FL",
              "timeZone": "America/New_York"
            },
            {
              "airportCode": "MEL",
              "airportName": "Tullamarine Arpt",
              "cityCode": "MEL",
              "cityName": "Melbourne",
              "countryCode": "AU",
              "countryName": "Australia",
              "latitude": -37.673333,
              "longitude": 144.843333,
              "stateCode": "VI",
              "timeZone": "Australia/Hobart"
            }
          ]
        });
    });
  });
});