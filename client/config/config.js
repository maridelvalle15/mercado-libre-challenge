export default {
  apis: {
    mercadoLibre: {
      baseURL: "http://localhost:8080/api",
      endpoints: {
        searchProduct: {
          method: "get",
          uri: "/items?q=query"
        },
        productDetail: {
          method: "get",
          uri: "/items/id"
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
