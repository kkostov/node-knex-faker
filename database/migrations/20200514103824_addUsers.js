exports.up = knex => {
    return knex.schema.createTable("users", table => {
        table.bigIncrements("id")
        table.text("email")
            .notNullable()
            .index()
        table.text("name")
        table
            .timestamp("created_at")
            .notNullable()
    });
};

exports.down = knex => {
    return knex.schema.dropTable("users");
};
