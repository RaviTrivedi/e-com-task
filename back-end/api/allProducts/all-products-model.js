const db = require("../../data/db-config");

const getAllProducts = async (data) => {

  return await db("products")

}

const getProduct = async (id, num) => {
  console.log(await db("products").where({ "id": num }));
  return await db("products").where({ "id": num })
}

module.exports = {
  getAllProducts,
  getProduct
};
