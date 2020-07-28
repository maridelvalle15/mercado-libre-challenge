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

class ApiLoader {
  static boot(App) {
    const { apis } = App.config;
    const api = {};
    Object.keys(apis).forEach(key => {
      api[key] = createEndpoint(apis[key]);
    });
    App.api = api;
  }
}

export default ApiLoader;
