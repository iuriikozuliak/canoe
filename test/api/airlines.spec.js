import createServer from '../_helpers/createServer';

describe('airlines API', function() {
  let request;
  before(async function () {
    request = await createServer();
  });

  describe('GET /airlines', function() {
    it('returns airlines list', async function() {
      await request.get('/airlines')
        .expect(200, [
            {
              "code": "SU",
              "name": "Aeroflot"
            },
            {
              "code": "MU",
              "name": "China Eastern"
            },
            {
              "code": "EK",
              "name": "Emirates"
            },
            {
              "code": "KE",
              "name": "Korean Air lines"
            },
            {
              "code": "QF",
              "name": "Qantas"
            },
            {
              "code": "SQ",
              "name": "Singapore Airlines"
            }
          ]
      );
    });
  });
});