//* Import Express and setup router
const express = require("express");
const router = express.Router();

//* Import models
const AllProductsModel = require("./all-products-model");
// const userAuth = require("../middleware/userAuth");

/**
 * Setup API Endpoints
 */

//-- [GET]
router.get("/getAllProducts", async (req, res) => {
  try {

    // const id = req.user.subject;

    await AllProductsModel.getAllProducts()
      .then((products) => {
        res.status(200).json(products);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } catch (error) {
    // console.log(error);
    // res.status(500).json(error);
  }
});

router.get("/product/:id", async (req, res) => {
  try {

    const productId = req.params.id;

    await AllProductsModel.getProduct("id", productId)
      .then((product) => {
        res.status(200).json(product);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;