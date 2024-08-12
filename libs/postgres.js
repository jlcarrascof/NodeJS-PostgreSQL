const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'javier',
    password: '12345',
    database: 'my_store'
});
