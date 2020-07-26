// Resolvers
const getItemsResolver = require("./resolvers/get-items.resolver");

const GET = "get";
const POST = "post";
const PUT = "put";
const DELETE = "delete";

/**
 * The set of routes and handlers for the API
 * each item in the array is an array with the form:
 * [http-method, path, resolver function]
 */
const routes = [
  /**
   * @swagger
   *
   * /api/items:
   *   get:
   *     description: List products by term

   *     produces:
   *      - application/json
   *     parameters:
   *      - in: query
   *        name: q
   *        schema:
   *         type: string
   *        required: true
   *        description: String term to search
   *     responses:
   *       200:
   *         description: get items
   */
  [GET, "/api/items", getItemsResolver.getItemsByTerm],

  /**
   * @swagger
   *
   * /api/items/{id}:
   *   get:
   *     description: Get product by id
   *     produces:
   *      - application/json
   *     parameters:
   *      - in: path
   *        name: id
   *        schema:
   *         type: string
   *        required: true
   *        description: Product id
   *     responses:
   *       200:
   *         description: get product
   */
  [GET, "/api/items/:id", getItemsResolver.getItemByID]
];

module.exports = routes;
