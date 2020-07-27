export default {
  apis: {
    mercadoLibre: {
      baseURL: "https://api.mercadolibre.com/",
      endpoints: {
        searchProduct: {
          method: "get",
          uri: "/sites/MLA/search?q=​%query%"
        },
        productDetail: {
          method: "get",
          uri: "/items/​%query%"
        }
      }
    }
  },
  errorTracker: {
    dsn: process.env.ERROR_TRACKER_DSN
  },
  behaviorTracker: {
    siteId: process.env.BEHAVIOR_TRACKER_SITE_ID,
    version: process.env.BEHAVIOR_TRACKER_VERSION
  },
  analytics: {
    trackingId: process.env.ANALYTICS_TRACKING_ID
  },
  randomVariable: "",
  anotherRandomVariable: ""
};
