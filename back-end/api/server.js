//* Import express and prepare server
const express = require("express");
const server = express();

//* Ensure Express is able to parse JSON data
server.use(express.json());
//* Import and setup CORS
const cors = require("cors");
server.use(cors());


//* Import Routers
const allProductsRouter = require("./allProducts/all-products-router");
//* Setup Routers
server.use("/api/allProducts", allProductsRouter);

module.exports = server;