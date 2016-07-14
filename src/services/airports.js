import request from 'superagent';

const ENDPOINT = 'http://node.locomote.com/code-task/';

export default () => ({
  get: async ({ query }) => {
    const res = await request
      .get(`${ENDPOINT}/airports`)
      .query(query)
      .accept('application/json');
    
    return res.body;
  }
});