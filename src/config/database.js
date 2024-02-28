import knex, { knex } from "knex";

const knex = knex({
    client: 'mysql',
    connection:{
        host: '127.0.0.1',
        port: 3306,
        user: '',
        password: '',
        database: 'myapp_test'
    },
});