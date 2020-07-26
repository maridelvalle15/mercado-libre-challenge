const createEndpoint = api => {
  const tales = {};
  Object.keys(api.endpoints).forEach(key => {
    tales[key] = params => {
      let uri = api.endpoints[key].uri;
      Object.keys(params).forEach(param => {
        uri = uri.replace(param, params[param]);
      });
      return fetch(encodeURI(`${api.baseURL}${uri}`), {
        method: api.endpoints[key].method
      });
    };
  });
  return tales;
};

module.exports = App => {
  const apis = App.config.apis;
  App.api = {};
  Object.keys(apis).forEach(key => {
    const api = createEndpoint(apis[key]);
    App.api[key] = api;
  });
};
