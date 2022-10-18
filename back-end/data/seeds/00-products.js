//** IMPORTANT: This seed is only for development purposes */

const products = [
    {
        "id": 1,
        "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "limit": 10,
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    },
    {
        "id": 2,
        "name": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,

        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",

    },
    {
        "id": 3,
        "name": "Mens Cotton Jacket",
        "price": 55.99,

        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",

    },
    {
        "id": 4,
        "name": "Mens Casual Slim Fit",
        "price": 15.99,

        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",

    },
    {
        "id": 5,
        "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,

        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",

    },
    {
        "id": 6,
        "name": "Solid Gold Petite Micropave ",
        "price": 168,

        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",

    },
    {
        "id": 7,
        "name": "White Gold Plated Princess",
        "price": 9.99,

        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",

    },
    {
        "id": 8,
        "name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,

        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",

    },
    {
        "id": 9,
        "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,

        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",

    },
    {
        "id": 10,
        "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,

        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",

    },
    {
        "id": 11,
        "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,

        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",

    },
    {
        "id": 12,
        "name": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,

        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",

    },
    {
        "id": 13,
        "name": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,

        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",

    },
    {
        "id": 14,
        "name": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,

        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",

    },
    {
        "id": 15,
        "name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,

        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",

    },
    {
        "id": 16,
        "name": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,

        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",

    },

]


const environment = process.env.NODE_ENV || "development";

exports.seed = function (knex) {
    return knex("products")
        .insert(products)
};

  //* NOTE: for testing purposes, the password for all is "test1234"
