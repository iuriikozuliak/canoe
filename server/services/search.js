import request  from 'superagent';
import airlines from './airlines';
import airports from './airports';
import _flow    from 'lodash/fp/flow';
import _flatten from 'lodash/fp/flatten';
import _map     from 'lodash/fp/map';

const ENDPOINT = 'http://node.locomote.com/code-task/';

const flightSearch = ({ code, query }) =>
  request
    .get(`${ENDPOINT}/flight_search/${code}`)
    .query(query);

export default () => ({
  get: async ({ query }) => {
    const searchMapper  = (v) => flightSearch({ code: v.code, query });
    const airlinesList  = await airlines().get();
    const promisesArray = await Promise.all(
      _map(searchMapper)(airlinesList)
    );

    return _flow(
      _map(v=> v.body), 
      _flatten
    )(promisesArray)
  }
});