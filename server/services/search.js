import request  from 'superagent';
import airlines from './airlines';
import airports from './airports';
import _        from 'lodash';

const ENDPOINT = 'http://node.locomote.com/code-task/';

const flightSearch = ({ code, query }) =>
  request
    .get(`${ENDPOINT}/flight_search/${code}`)
    .query(query);

export default () => ({
  get: async ({ query }) => {
    const airlinesList = await airlines().get();
    const promises     = _.map(airlinesList, (v) => flightSearch({ code: v.code, query }));
    const results      = _
      .chain(await Promise.all(promises))
      .map(v => v.body)
      .flatten();
    
    return results
  }
});