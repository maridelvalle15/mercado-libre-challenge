import ApiLoader from "./boot-loaders/api.loader";
import config from "./config";

const loaders = [ApiLoader];

export default class App {
  static boot() {
    this.config = config;
    return Promise.all(loaders.map(s => s.boot(App)))
      .then(() => console.info("Loaders done!"))
      .catch(err => console.error("Error while booting the app", err));
  }
}
