/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("products", (tbl) => {
            tbl.increments();
            tbl.string("name").notNullable();
            tbl.integer("price").notNullable();
            tbl.integer("quantity").notNullable().defaultTo(0);
            tbl.integer("limit").notNullable().defaultTo(10);
            tbl.string("image");
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("products")
};
