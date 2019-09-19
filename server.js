const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("./src/data/categories.json");
const db = router.db;

// parse JSON to plain object
server.use(jsonServer.bodyParser);

// add custom method for "PATCH" request
server.use((req, res, next) => {
  if (req.method === "PATCH") {
    switch (req.url) {
      case "/categories/all": {
        // we can use lodash methods, example: db._.isPlaneObject, db._.isArray, etc..
        const currentCategoriesState = db.getState().categories;
        const nextCategoriesState = currentCategoriesState.map(item =>
          Object.assign({}, item, req.body)
        );
        const categories = db.setState({ categories: nextCategoriesState }).value();

        db.write();

        res.status(200).send(categories);
        break;
      }
      default:
        next();
    }
  } else {
    next();
  }
});

// should be placed after requests middlewares
server.use(router);

// start server
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`JSON Server is running on PORT ${PORT}`);
});

module.exports = server;
