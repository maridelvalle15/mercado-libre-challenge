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

class ApiLoader {
  static boot(App) {
    const { apis } = App.config;
    const api = [];
    Object.keys(apis).forEach(key => {
      api[key] = createEndpoint(apis[key]);
    });
    App.api = api;
  }
}

export default ApiLoader;
