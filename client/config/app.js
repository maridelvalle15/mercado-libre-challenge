import ApiLoader from "./boot-loaders/api.loader";
import config from "./config";

export default class App {
  static boot() {
    this.config = config;
    return Promise.resolve(ApiLoader.boot(App))
      .then(() => {
        console.info("Loaders done!");
      })
      .catch(err => console.error("Error while booting the app", err));
  }
}
