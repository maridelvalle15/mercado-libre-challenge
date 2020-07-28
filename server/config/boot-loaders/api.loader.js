const createEndpoint = api => {
  const endpoint = {};
  Object.keys(api.endpoints).forEach(key => {
    endpoint[key] = params => {
      let uri = api.endpoints[key].uri;
      Object.keys(params).forEach(param => {
        uri = uri.replace(param, params[param]);
      });
      return fetch(encodeURI(`${api.baseURL}${uri}`), {
        method: api.endpoints[key].method
      });
    };
  });
  return endpoint;
};

module.exports = App => {
  const apis = App.config.apis;
  App.api = {};
  Object.keys(apis).forEach(key => {
    const api = createEndpoint(apis[key]);
    App.api[key] = api;
  });
};
