export default class App {
  static boot() {
    this.api = {
      mercadoLibre: {
        searchProduct: () => ({
          categories: ["Consolas y Videojuegos", "Consolas"],
          items: [
            {
              id: "MLA825602079",
              title:
                "Nintendo Switch 32gb Standard Rojo Neón, Azul Neón Y Negro",
              price: {
                currency: "ARS",
                amount: 80000
              },
              location: "Capital Federal",
              picture:
                "http://mla-s2-p.mlstatic.com/883371-MLA32731749246_112019-I.jpg",
              condition: "new",
              free_shipping: true
            }
          ]
        }),
        productDetail: () => ({
          author: "SANTELMOGAMES",
          item: {
            id: 190781661,
            title: "Nintendo Switch 32gb Standard Rojo Neón, Azul Neón Y Negro",
            price: {
              currency: "ARS",
              amount: 80000
            },
            picture:
              "http://mla-s2-p.mlstatic.com/883371-MLA32731749246_112019-O.jpg",
            condition: "new",
            free_shipping: true,
            sold_quantity: 50,
            description:
              "Gracias a su interconectividad global, descargarás los mejores videojuegos y navegarás en la web sin límites. A su vez, la posibilidad de competir en línea con otros te hará disfrutar de aventuras inolvidables junto a amigos y personas de todas partes del mundo.\n\nCalidad de otro nivel\nAsimismo, podrás reproducir música, películas y tus series favoritas a través de las aplicaciones descargables.\n\nDiseño innovador\nNintendo"
          }
        })
      }
    };
    return this;
  }
}
