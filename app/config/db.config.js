module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "root",
    DB: "testdb",
    dialect: "postgres",
    /*  pool will be used for Sequelize connection pool configuration
        max: maximum number of connection in pool
        min: minimum number of connection in pool
        idle: maximum time, in ms, that a connection can be idle before being released
        acquire: maximum time, in ms,
        that pool will try to get connection before throwing error */
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
