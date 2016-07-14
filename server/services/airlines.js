import request from 'superagent';

const ENDPOINT = 'http://node.locomote.com/code-task/';

export default () => ({
  get: async () => {
    const res = await request
      .get(`${ENDPOINT}/airlines`)
      .accept('application/json')

    return res.body
  }
});