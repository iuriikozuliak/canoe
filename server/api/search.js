import searchService from 'services/search';

const makeApi = (service) => {
  const get = async (ctx) => {
    const data = await service.get({ query: ctx.query });

    return ctx.ok(data);
  };
  return { get };
};

export default function (router) {
  const api = makeApi(searchService());

  router.get('/search', api.get)
}