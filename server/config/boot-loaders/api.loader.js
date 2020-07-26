const createEndpoint = api => {
  const tales = {};
  Object.keys(api.endpoints).forEach(key => {
    const uri = api.endpoints[key].uri;
    tales[key] = params => {
      Object.keys(params).forEach(param => {
        uri = uri.replace(param, params[param]);
      });
      return fetch(api.baseURL + api.endpoints[key].uri, {
        method: api.endpoints[key]
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
