import airlinesService from 'services/airlines';

const makeApi = (service) => {
  const get = async (ctx) => {
    const data = await service.get();

    return ctx.ok(data);
  };

  const post = async (ctx) => {
    return ctx.ok({ data: ctx.request.body });
  };

  return {
    get, post
  };
};

export default function (router) {
  const api = makeApi(airlinesService());

  router
    .get('/airlines', api.get)
    .post('/airlines', api.post);
}