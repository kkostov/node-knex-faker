module.exports = {
    client: "sqlite3",
    connection: {
        filename: "./db.sqlite"
    },
    migrations: {
        directory: "./database/migrations"
    },
    seeds: {
        directory: "./database/seeds"
    },
    timezone: "UTC",
    debug: process.env.DB_DEBUG,
    useNullAsDefault: true
};
